"use client"

import { Card } from "@/components/ui/card"
import { Bell, MessageSquare, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AlertsHistory() {
  const history = [
    {
      type: "whatsapp",
      title: "Calidad del aire deteriorada",
      message: "AQI: 78 - Moderado",
      time: "Hace 2 horas",
      status: "sent",
    },
    {
      type: "sms",
      title: "Alerta de primera vez",
      message: "Bienvenido a AireTEMPO. AQI actual: 42",
      time: "Hace 5 horas",
      status: "sent",
    },
    {
      type: "whatsapp",
      title: "Mejora en calidad del aire",
      message: "AQI: 35 - Bueno",
      time: "Ayer",
      status: "sent",
    },
    {
      type: "email",
      title: "Resumen diario",
      message: "Tu reporte diario de calidad del aire",
      time: "Hace 2 días",
      status: "sent",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "whatsapp":
        return <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      case "sms":
        return <MessageSquare className="w-4 h-4 text-primary" />
      case "email":
        return <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Historial de Alertas</h2>
          <Button variant="ghost" size="sm">
            Ver todo
          </Button>
        </div>

        <div className="space-y-3">
          {history.map((item, index) => (
            <div key={index} className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-1">{getIcon(item.type)}</div>
                <div className="flex-1 space-y-1">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.message}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">Las alertas se envían según tu configuración</p>
        </div>
      </div>
    </Card>
  )
}
