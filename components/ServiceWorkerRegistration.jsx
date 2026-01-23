"use client";

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    // Desregistrar Service Workers antigos que podem causar problemas de cache
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister().then(() => {
            console.log('Service Worker antigo removido');
          });
        }
      });
      
      // Limpar caches antigos
      if ('caches' in window) {
        caches.keys().then((cacheNames) => {
          cacheNames.forEach((cacheName) => {
            caches.delete(cacheName);
          });
        });
      }
    }
  }, []);

  return null;
}