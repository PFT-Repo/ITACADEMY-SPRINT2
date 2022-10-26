self.addEventListener("install", e =>{
    e.waitUntil(
        catches.open("static").then(
            cache=>{
                return cache.addAll(["./","./css/custom.css","./assets/icon-48x48.png"]);
            }
        )
    );
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});