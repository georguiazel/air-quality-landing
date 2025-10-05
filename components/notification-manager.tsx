"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bell, BellOff } from "lucide-react"

export function NotificationManager() {
  const [permission, setPermission] = useState<NotificationPermission>("default")
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    if ("Notification" in window) {
      setIsSupported(true)
      setPermission(Notification.permission)
    }
  }, [])

  const requestPermission = async () => {
    if (!isSupported) {
      alert("Las notificaciones no están soportadas en este navegador")
      return
    }

    try {
      const result = await Notification.requestPermission()
      setPermission(result)

      if (result === "granted") {
        console.log("[v0] Notification permission granted")
        // Register service worker for push notifications
        if ("serviceWorker" in navigator) {
          const registration = await navigator.serviceWorker.ready
          console.log("[v0] Service Worker ready:", registration)

          // Send test notification
          new Notification("AireTEMPO", {
            body: "Notificaciones activadas correctamente",
            icon: "/icon-192.jpg",
          })
        }
      }
    } catch (error) {
      console.error("[v0] Error requesting notification permission:", error)
    }
  }

  if (!isSupported) return null

  return (
    <div className="flex items-center gap-2">
      {permission === "granted" ? (
        <Button variant="outline" size="sm" className="gap-2 bg-transparent" disabled>
          <Bell className="w-4 h-4" />
          Notificaciones activas
        </Button>
      ) : (
        <Button variant="default" size="sm" className="gap-2" onClick={requestPermission}>
          <BellOff className="w-4 h-4" />
          Activar notificaciones
        </Button>
      )}
    </div>
  )
}
