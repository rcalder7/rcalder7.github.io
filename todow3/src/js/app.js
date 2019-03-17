if ('serviceWorker' in navigator){
    navigator.serviceWorker
        .register('/sw.js')
        .then(funciton{
              console.log('Service Worker registred!');
        
    });
    
}