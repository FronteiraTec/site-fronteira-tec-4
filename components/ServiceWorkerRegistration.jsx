"use client";

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Força atualização do SW a cada 60 segundos
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Verifica atualizações imediatamente
          registration.update();
          
          // Força atualização quando uma nova versão é encontrada
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Novo SW instalado, recarrega a página
                console.log('Nova versão do SW disponível, recarregando...');
                window.location.reload();
              }
            });
          });
          
          // Verifica atualizações periodicamente
          setInterval(() => {
            registration.update();
          }, 60000);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null;
}