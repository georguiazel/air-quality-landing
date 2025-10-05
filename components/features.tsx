"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Bell, Cloud, Smartphone, TrendingUp, Shield, Zap } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const features = [
  {
    icon: Cloud,
    title: "Datos TEMPO Satelitales",
    description:
      "Integración en tiempo real con datos de calidad del aire desde satélites TEMPO y estaciones terrestres.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Recibe notificaciones por SMS o WhatsApp cuando la calidad del aire sea peligrosa en tu zona.",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: Smartphone,
    title: "PWA Responsive",
    description:
      "Aplicación web progresiva que funciona en cualquier dispositivo con notificaciones push en tiempo real.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: TrendingUp,
    title: "Pronósticos Precisos",
    description:
      "Predicciones basadas en IA que combinan datos meteorológicos y patrones históricos de calidad del aire.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Salud Pública",
    description: "Ayuda a tomar decisiones informadas sobre actividades al aire libre y protección respiratoria.",
    gradient: "from-red-500/10 to-rose-500/10",
  },
  {
    icon: Zap,
    title: "Configuración Personalizada",
    description: "Ajusta los intervalos de alertas y umbrales según tus necesidades y sensibilidad.",
    gradient: "from-yellow-500/10 to-amber-500/10",
  },
]

export function Features() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 })

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="animate-spin-slow" style={{ animationDuration: "30s" }}>
          <path d="M50 10 Q60 30 50 50 Q40 30 50 10" fill="currentColor" className="text-green-500" />
          <path d="M50 50 Q70 60 90 50 Q70 40 50 50" fill="currentColor" className="text-green-500" />
          <path d="M50 50 Q40 70 50 90 Q60 70 50 50" fill="currentColor" className="text-green-500" />
          <path d="M50 50 Q30 40 10 50 Q30 60 50 50" fill="currentColor" className="text-green-500" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Funcionalidades Principales</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todo lo que necesitas para monitorear y proteger tu salud respiratoria
          </p>
        </div>

        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`p-6 space-y-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group relative overflow-hidden ${
                  gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
