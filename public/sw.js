// Service Worker mínimo para PWA - permite "Adicionar à tela inicial"
const CACHE = 'power-viril-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
