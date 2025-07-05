
    self.addEventListener('push', function(event) {
      const options = {
        body: 'Your Midday Mind Flex quiz options are ready!',
        icon: 'icon.png',
        badge: 'icon.png'
      };
      event.waitUntil(
        self.registration.showNotification('Brilliant Minds Society', options)
      );
    });
    