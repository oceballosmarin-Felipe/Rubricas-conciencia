self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('conciencia-app-v2').then((cache) => {
      return cache.addAll([
        './index.html',
        './rubricas.js',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});