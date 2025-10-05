"use client"

import type React from "react"

import { Bell, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { useEffect, useState } from "react"

interface NotificationCard {
  id: number
  icon: React.ReactNode
  title: string
  message: string
  type: "success" | "warning" | "info" | "alert"
  angle: number
}

export function FloatingNotificationCards() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const notifications: NotificationCard[] = [
    {
      id: 1,
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Calidad Buena",
      message: "AQI: 45 - Aire limpio",
      type: "success",
      angle: 0,
    },
    {
      id: 2,
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Alerta Moderada",
      message: "PM2.5 elevado",
      type: "warning",
      angle: 90,
    },
    {
      id: 3,
      icon: <Bell className="w-5 h-5" />,
      title: "Nueva Alerta",
      message: "Cambio detectado",
      type: "info",
      angle: 180,
    },
    {
      id: 4,
      icon: <Info className="w-5 h-5" />,
      title: "Pronóstico",
      message: "Mejora esperada",
      type: "info",
      angle: 270,
    },
  ]

  const getCardColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400"
      case "warning":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-600 dark:text-yellow-400"
      case "alert":
        return "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400"
      default:
        return "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400"
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {notifications.map((notification) => {
        const angle = (notification.angle + rotation) * (Math.PI / 180)
        const radius = 280
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <div
            key={notification.id}
            className={`absolute top-1/2 left-1/2 transition-all duration-100 ease-linear`}
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <div
              className={`${getCardColor(notification.type)} border backdrop-blur-sm rounded-lg p-3 shadow-lg hover:scale-110 transition-transform pointer-events-auto animate-float`}
            >
              <div className="flex items-start gap-2 min-w-[180px]">
                <div className="mt-0.5">{notification.icon}</div>
                <div>
                  <p className="text-sm font-semibold">{notification.title}</p>
                  <p className="text-xs opacity-80">{notification.message}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
