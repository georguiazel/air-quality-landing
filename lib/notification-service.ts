// Real-time notification service for PWA

export interface AirQualityNotification {
  title: string
  body: string
  aqi: number
  quality: string
  timestamp: Date
}

export class NotificationService {
  private static instance: NotificationService
  private registration: ServiceWorkerRegistration | null = null

  private constructor() {
    this.initServiceWorker()
  }

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService()
    }
    return NotificationService.instance
  }

  private async initServiceWorker() {
    if ("serviceWorker" in navigator) {
      try {
        this.registration = await navigator.serviceWorker.register("/sw.js")
        console.log("[v0] Service Worker registered:", this.registration)
      } catch (error) {
        console.error("[v0] Service Worker registration failed:", error)
      }
    }
  }

  async requestPermission(): Promise<boolean> {
    if (!("Notification" in window)) {
      console.log("[v0] Notifications not supported")
      return false
    }

    const permission = await Notification.requestPermission()
    return permission === "granted"
  }

  async sendNotification(notification: AirQualityNotification): Promise<void> {
    if (!this.registration) {
      console.log("[v0] Service Worker not registered")
      return
    }

    if (Notification.permission !== "granted") {
      console.log("[v0] Notification permission not granted")
      return
    }

    try {
      await this.registration.showNotification(notification.title, {
        body: notification.body,
        icon: "/icon-192.jpg",
        badge: "/icon-192.jpg",
        tag: "air-quality-update",
        data: {
          aqi: notification.aqi,
          quality: notification.quality,
          timestamp: notification.timestamp,
        },
        actions: [
          { action: "view", title: "Ver dashboard" },
          { action: "dismiss", title: "Cerrar" },
        ],
        requireInteraction: notification.aqi > 100,
      })

      console.log("[v0] Notification sent:", notification)
    } catch (error) {
      console.error("[v0] Error sending notification:", error)
    }
  }

  async sendRealtimeUpdate(aqi: number, quality: string): Promise<void> {
    const notification: AirQualityNotification = {
      title: "Actualización de Calidad del Aire",
      body: `La calidad del aire es ${quality}. AQI: ${aqi}`,
      aqi,
      quality,
      timestamp: new Date(),
    }

    await this.sendNotification(notification)
  }

  async sendBadAirQualityAlert(aqi: number, quality: string): Promise<void> {
    const notification: AirQualityNotification = {
      title: "⚠️ Alerta: Mala Calidad del Aire",
      body: `La calidad del aire ha empeorado. ${quality} (AQI: ${aqi}). Se recomienda limitar actividades al aire libre.`,
      aqi,
      quality,
      timestamp: new Date(),
    }

    await this.sendNotification(notification)
  }

  // Simulate real-time updates
  startRealtimeMonitoring(interval = 60000): void {
    setInterval(() => {
      // Simulate AQI changes
      const aqi = Math.floor(Math.random() * 150)
      let quality = "Bueno"

      if (aqi > 100) {
        quality = "Malo"
        this.sendBadAirQualityAlert(aqi, quality)
      } else if (aqi > 50) {
        quality = "Moderado"
        this.sendRealtimeUpdate(aqi, quality)
      } else {
        quality = "Bueno"
        this.sendRealtimeUpdate(aqi, quality)
      }
    }, interval)
  }
}
