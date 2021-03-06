self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('sw-cache').then(function(cache) {
			return cache.addAll([
				//'script.js',
				//'share.html',
				'icon.png'
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
