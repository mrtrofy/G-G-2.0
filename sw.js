const CACHE_NAME = 'gg-shopping-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/logo.jpg',
  'https://cdn.tailwindcss.com'
];

// Instalación: Guardar archivos base en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Estrategia: Cargar de caché y luego actualizar
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});