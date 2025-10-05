"use client"

import { useEffect } from "react"
import { AirQualityMap } from "@/components/dashboard/air-quality-map"
import { MetricsOverview } from "@/components/dashboard/metrics-overview"
import { WeatherData } from "@/components/dashboard/weather-data"
import { AirQualityChart } from "@/components/dashboard/air-quality-chart"
import { AlertsPanel } from "@/components/dashboard/alerts-panel"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { NotificationManager } from "@/components/notification-manager"
import { NotificationService } from "@/lib/notification-service"

export default function DashboardPage() {
  useEffect(() => {
    // Initialize notification service
    const notificationService = NotificationService.getInstance()

    // Request permission on first load
    notificationService.requestPermission()

    // Start real-time monitoring (every 5 minutes for demo)
    // In production, this would be triggered by actual data updates
    // notificationService.startRealtimeMonitoring(300000)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Notification Manager */}
        <div className="flex justify-end">
          <NotificationManager />
        </div>

        {/* Metrics Overview */}
        <MetricsOverview />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map and Chart - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <AirQualityMap />
            <AirQualityChart />
          </div>

          {/* Sidebar - Weather and Alerts */}
          <div className="space-y-6">
            <WeatherData />
            <AlertsPanel />
          </div>
        </div>
      </main>
    </div>
  )
}
