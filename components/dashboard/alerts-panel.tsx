"use client"

import { Card } from "@/components/ui/card"
import { Bell, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AlertsPanel() {
  const alerts = [
    {
      type: "success",
      icon: <CheckCircle className="w-4 h-4" />,
      title: "Good air quality",
      message: "Ideal conditions for outdoor activities",
      time: "5 min ago",
    },
    {
      type: "info",
      icon: <Info className="w-4 h-4" />,
      title: "Forecast updated",
      message: "New TEMPO data available",
      time: "15 min ago",
    },
    {
      type: "warning",
      icon: <AlertTriangle className="w-4 h-4" />,
      title: "Pollen alert",
      message: "Moderate pollen levels in your area",
      time: "1 hour ago",
    },
  ]

  const getAlertStyles = (type: string) => {
    switch (type) {
      case "success":
        return "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300"
      case "warning":
        return "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300"
      case "info":
        return "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300"
      default:
        return "bg-muted border-border text-foreground"
    }
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Alerts</h2>
        </div>
        <Button variant="ghost" size="sm">View all</Button>
      </div>

      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div key={index} className={`p-4 rounded-lg border ${getAlertStyles(alert.type)}`}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5">{alert.icon}</div>
              <div className="flex-1 space-y-1">
                <p className="font-semibold text-sm">{alert.title}</p>
                <p className="text-sm opacity-90">{alert.message}</p>
                <p className="text-xs opacity-70">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <Button variant="outline" className="w-full bg-transparent">Configure alerts</Button>
      </div>
    </Card>
  )
}
