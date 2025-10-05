"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function DashboardDemo() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="demo" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Dashboard Profesional de Calidad del Aire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Visualiza datos en tiempo real, pronósticos precisos, mapas de calor interactivos y recomendaciones
            personalizadas de salud.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border hover:scale-105 transition-transform duration-500">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard_landing-k5DvwH4uiR3VPQMfdmj4lGGWOJ96dh.jpg"
                alt="Dashboard Oxyra - Calidad del Aire Buena"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-foreground">Vista de Calidad Buena</h3>
              <p className="text-sm text-muted-foreground">Monitoreo completo con AQI 61 - Aire limpio</p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border hover:scale-105 transition-transform duration-500">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-05%20at%2012.25.56_9df72ff1-2OrGrLuvwfhdhKAUC7IL0hjbvOqLNe.jpg"
                alt="Dashboard Oxyra - Calidad del Aire Moderada"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-foreground">Vista de Calidad Moderada</h3>
              <p className="text-sm text-muted-foreground">Alertas activas con AQI 57 - Monitoreo PM10</p>
            </div>
          </div>
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button size="lg" className="text-base group" asChild>
            <Link href="/dashboard">
              Explorar Dashboard Completo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
