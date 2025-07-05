
self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated.');
});

self.addEventListener('push', function(event) {
  const options = {
    body: "Your Midday Mind Flex suggestions are ready!",
    icon: "icon.png",
    badge: "icon.png"
  };
  event.waitUntil(
    self.registration.showNotification("Brilliant Minds Society", options)
  );
});
