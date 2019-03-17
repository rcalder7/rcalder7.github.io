
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('rcalder7.github.io/todow3/sw.js')
    .then(function() {
      console.log('Service worker registered!');
    });
}
