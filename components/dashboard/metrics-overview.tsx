"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Wind, Droplets, Eye, Activity } from "lucide-react"

interface Metric {
  label: string
  value: string
  unit: string
  status: "good" | "moderate" | "poor"
  icon: React.ReactNode
  change: string
}

export function MetricsOverview() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: "AQI",
      value: "42",
      unit: "US AQI",
      status: "good",
      icon: <Activity className="w-5 h-5" />,
      change: "-5 since yesterday",
    },
    {
      label: "PM2.5",
      value: "12.3",
      unit: "μg/m³",
      status: "good",
      icon: <Wind className="w-5 h-5" />,
      change: "-2.1 since yesterday",
    },
    {
      label: "Humidity",
      value: "65",
      unit: "%",
      status: "good",
      icon: <Droplets className="w-5 h-5" />,
      change: "+3% since yesterday",
    },
    {
      label: "Visibility",
      value: "10",
      unit: "km",
      status: "good",
      icon: <Eye className="w-5 h-5" />,
      change: "No change",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-emerald-500"
      case "moderate":
        return "text-amber-500"
      case "poor":
        return "text-red-500"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-2 rounded-lg bg-primary/10 ${getStatusColor(metric.status)}`}>{metric.icon}</div>
            <span className="text-xs text-muted-foreground">{metric.change}</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-3xl font-bold">
              {metric.value}
              <span className="text-sm font-normal text-muted-foreground ml-1">{metric.unit}</span>
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}
