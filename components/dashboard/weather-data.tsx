"use client"

import { Card } from "@/components/ui/card"
import { Cloud, Wind, Droplets, Sun, Thermometer } from "lucide-react"

export function WeatherData() {
  const weatherMetrics = [
    { icon: <Thermometer className="w-4 h-4" />, label: "Temperatura", value: "24°C" },
    { icon: <Wind className="w-4 h-4" />, label: "Viento", value: "12 km/h" },
    { icon: <Droplets className="w-4 h-4" />, label: "Humedad", value: "65%" },
    { icon: <Sun className="w-4 h-4" />, label: "UV Index", value: "5 (Moderado)" },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Cloud className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Datos Meteorológicos</h2>
      </div>

      <div className="space-y-4">
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mb-3">
            <Sun className="w-10 h-10 text-white" />
          </div>
          <p className="text-4xl font-bold mb-1">24°C</p>
          <p className="text-muted-foreground">Parcialmente nublado</p>
        </div>

        <div className="space-y-3">
          {weatherMetrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2">
                <div className="text-primary">{metric.icon}</div>
                <span className="text-sm">{metric.label}</span>
              </div>
              <span className="font-semibold">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">Pronóstico para las próximas 24 horas</p>
        </div>
      </div>
    </Card>
  )
}
