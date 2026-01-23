// Service Worker desabilitado para evitar problemas de cache
// Este arquivo existe apenas para compatibilidade
console.log('Service Worker desabilitado');
  '/imagens/komi.png',
  '/imagens/isabela.png',
  '/imagens/ruan.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
  // Força o novo SW a assumir imediatamente
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  // Estratégia Network First para chunks do Next.js (arquivos com hash)
  if (url.pathname.includes('/_next/') || url.pathname.includes('.js') || url.pathname.includes('.css')) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // Clona a resposta antes de colocar no cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          return response;
        })
        .catch(function() {
          // Se a rede falhar, tenta o cache
          return caches.match(event.request);
        })
    );
  } else {
    // Estratégia Cache First para imagens e páginas estáticas
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request).then(function(response) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
        })
    );
  }
});