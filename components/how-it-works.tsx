"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    number: "01",
    title: "Regístrate",
    description: "Crea tu cuenta gratuita y configura tus preferencias de ubicación y alertas.",
  },
  {
    number: "02",
    title: "Recibe el Estado Inicial",
    description: "Al registrarte, recibirás inmediatamente el estado actual de la calidad del aire en tu zona.",
  },
  {
    number: "03",
    title: "Configura Alertas",
    description: "Personaliza los intervalos y umbrales para recibir notificaciones por SMS o WhatsApp.",
  },
  {
    number: "04",
    title: "Monitoreo Continuo",
    description: "Nuestra Web te mantiene informado en tiempo real sobre cambios en la calidad del aire.",
  },
]

export function HowItWorks() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })
  const { ref: stepsRef, isInView: stepsInView } = useInView({ threshold: 0.1 })

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Cómo Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comienza a proteger tu salud en 4 simples pasos
          </p>
        </div>

        <div
          ref={stepsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`p-6 space-y-4 relative transition-all duration-700 ${
                stepsInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-6xl font-bold text-primary/10">{step.number}</div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
