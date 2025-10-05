"use client"

import type React from "react"
import { useInView } from "@/hooks/use-in-view"
import { Smartphone, Monitor, Bell } from "lucide-react"

const showcaseItems = [
  {
    icon: Monitor,
    title: "Dashboard Interactivo",
    description: "Visualiza mapas de calidad del aire, gráficos históricos y pronósticos en tiempo real",
    image: "/interactive-air-quality-dashboard-with-maps--chart.jpg",
  },
  {
    icon: Bell,
    title: "Sistema de Alertas",
    description: "Configura notificaciones personalizadas por SMS o WhatsApp según tus preferencias",
    image: "/mobile-notification-settings-screen-showing-alert-.jpg",
  },
  {
    icon: Smartphone,
    title: "App Móvil PWA",
    description: "Accede desde cualquier dispositivo con nuestra aplicación web progresiva",
    image: "/mobile-phone-showing-air-quality-app-with-clean-in.jpg",
  },
]

export function UIShowcase() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Interfaz Diseñada para la Acción</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una experiencia de usuario intuitiva que te mantiene informado y protegido
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 0

            return <ShowcaseItem key={index} item={item} Icon={Icon} isEven={isEven} index={index} />
          })}
        </div>
      </div>
    </section>
  )
}

function ShowcaseItem({
  item,
  Icon,
  isEven,
  index,
}: {
  item: (typeof showcaseItems)[0]
  Icon: any
  isEven: boolean
  index: number
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:grid-flow-dense"}`}
    >
      {/* Content */}
      <div
        className={`space-y-6 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-x-0" : `opacity-0 ${isEven ? "-translate-x-10" : "translate-x-10"}`
        } ${isEven ? "" : "md:col-start-2"}`}
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-3xl font-bold text-foreground">{item.title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
      </div>

      {/* Image */}
      <div
        className={`relative transition-all duration-1000 delay-300 ${
          isInView ? "opacity-100 translate-x-0" : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
        } ${isEven ? "" : "md:col-start-1 md:row-start-1"}`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card group">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Decorative element */}
        <div
          className={`absolute -z-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl ${
            isEven ? "-right-20 -bottom-20" : "-left-20 -top-20"
          }`}
        />
      </div>
    </div>
  )
}
