const CACHE_NAME = 'fronteiratec-v1';
const urlsToCache = [
  '/',
  '/nossotime',
  '/processoseletivo', 
  '/processotrabalho',
  '/imagens/SemFronteiras.png',
  '/imagens/inne.png',
  '/imagens/gustavo.png',
  '/imagens/loude.png',
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
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});