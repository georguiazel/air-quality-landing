"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wind, Droplets, Eye, ThermometerSun } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const airQualityData = [
  { label: "Good", value: 45, color: "bg-accent", textColor: "text-accent" },
  { label: "Moderate", value: 85, color: "bg-chart-2", textColor: "text-chart-2" },
  { label: "Poor", value: 155, color: "bg-destructive", textColor: "text-destructive" },
]

const metrics = [
  { icon: Wind, label: "PM2.5", value: "45 μg/m³", status: "good" },
  { icon: Droplets, label: "Humidity", value: "65%", status: "normal" },
  { icon: Eye, label: "Visibility", value: "10 km", status: "good" },
  { icon: ThermometerSun, label: "Temperature", value: "24°C", status: "normal" },
]

export function AirQualityDemo() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })
  const { ref: leftCardRef, isInView: leftCardInView } = useInView({ threshold: 0.2 })
  const { ref: rightCardRef, isInView: rightCardInView } = useInView({ threshold: 0.2 })
  const { ref: imageRef, isInView: imageInView } = useInView({ threshold: 0.2 })

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Real-time Monitoring</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            View air quality and weather data updated in real time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Air Quality Index Card */}
          <Card
            ref={leftCardRef as React.RefObject<HTMLDivElement>}
            className={`p-8 space-y-6 transition-all duration-700 ${
              leftCardInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-foreground">Air Quality Index</h3>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">Live</Badge>
            </div>

            <div className="space-y-4">
              {airQualityData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{item.label}</span>
                    <span className={`font-semibold ${item.textColor}`}>{item.value}</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${Math.min((item.value / 200) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">Last updated: 2 minutes ago</p>
            </div>
          </Card>

          {/* Weather Metrics Card */}
          <Card
            ref={rightCardRef as React.RefObject<HTMLDivElement>}
            className={`p-8 space-y-6 transition-all duration-700 delay-200 ${
              rightCardInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground">Weather Data</h3>

            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{metric.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  </div>
                )
              })}
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <p className="text-sm text-muted-foreground">TEMPO integration active</p>
              </div>
            </div>
          </Card>
        </div>

        <div
          ref={imageRef as React.RefObject<HTMLDivElement>}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            imageInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card group">
            <img
              src="./dashboard_main_intro.jpg"
              alt="Complete Air Quality Dashboard"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
