"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Bell, Cloud } from "lucide-react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { FloatingNotificationCards } from "@/components/floating-notification-cards"
import Image from "next/image"

export function Hero() {
  const { ref: heroRef, isInView } = useInView({ threshold: 0.2 })

  return (
    <section
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
              <Cloud className="w-4 h-4 animate-bounce" />
              <span>Real-time TEMPO data</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Breathe with{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                confidence
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Smart air quality forecasts combining TEMPO satellite data with ground measurements. Receive instant alerts and make better decisions for your health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base group" asChild>
                <Link href="/register">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <Link href="#demo">View Demo</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-accent animate-pulse" />
                <span className="text-sm text-muted-foreground">SMS/WhatsApp Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Real-time Data</span>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard preview with floating notifications */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative max-w-2xl mx-auto min-h-[600px] flex items-center justify-center">
              <FloatingNotificationCards />

              {/* Center dashboard preview */}

              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-secondary to-primary opacity-20 blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
