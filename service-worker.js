const FILES_TO_CACHE = [
    "./index.html",
    "./events.html",
    "./tickets.html",
    "./schedule.html",
    "./assets/css/style.css",
    "./assets/css/bootstrap.css",
    "./assets/css/tickets.css",
    "./dist/app.bundle.js",
    "./dist/events.bundle.js",
    "./dist/tickets.bundle.js",
    "./dist/schedule.bundle.js"
];

const APP_PREFIX = 'FoodFest-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;


self.addEventListener('install', function (e) {
    // e.waitUntil tells the browser to wait until the work is complete before terminating the service worker.  this ensures that the service worker doesn't move on from the installing phase until it's finished executing all of it's code.
    e.waitUntil(
        // caches.open finds the specific cache by name, then adds every file in the FILES_TO_CACHE array to the cache.
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
});