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
              <span>Datos TEMPO en Tiempo Real</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Respira con{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                confianza
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Pronóstico inteligente de calidad del aire integrando datos TEMPO satelitales con mediciones terrestres.
              Recibe alertas instantáneas y toma mejores decisiones para tu salud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base group" asChild>
                <Link href="/register">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <Link href="#demo">Ver Demo</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-accent animate-pulse" />
                <span className="text-sm text-muted-foreground">Alertas SMS/WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Datos en Tiempo Real</span>
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
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card hover:scale-105 transition-transform duration-700 max-w-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard_landing-k5DvwH4uiR3VPQMfdmj4lGGWOJ96dh.jpg"
                  alt="Oxyra Dashboard Preview"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-secondary to-primary opacity-20 blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
