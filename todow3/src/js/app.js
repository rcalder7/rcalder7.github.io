
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/todow3/sw.js')
    .then(function() {
      console.log('Service worker registered!');
    });
}
