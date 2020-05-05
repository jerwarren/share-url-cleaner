self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('sw-cache').then(function(cache) {
			return cache.addAll([
				'index.html',
				'script.js',
				'styles.css',
				'logo.png'
			])
		})
	);
});
  
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});