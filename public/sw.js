const CACHE_NAME = "airetempo-v1"
const urlsToCache = ["/", "/dashboard", "/alerts", "/manifest.json"]

// Install event - cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[SW] Deleting old cache:", cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
  self.clients.claim()
})

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }
        const responseToCache = response.clone()
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })
        return response
      })
    }),
  )
})

// Push notification event
self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {}
  const title = data.title || "AireTEMPO"
  const options = {
    body: data.body || "Nueva actualización de calidad del aire",
    icon: "/icon-192.jpg",
    badge: "/icon-192.jpg",
    data: data.data || {},
    actions: [
      { action: "view", title: "Ver detalles" },
      { action: "dismiss", title: "Cerrar" },
    ],
    tag: "air-quality-alert",
    requireInteraction: data.requireInteraction || false,
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

// Notification click event
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  if (event.action === "view") {
    event.waitUntil(clients.openWindow("/dashboard"))
  }
})
