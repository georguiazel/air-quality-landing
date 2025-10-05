"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export function CTA() {
  const { ref: ctaRef, isInView } = useInView({ threshold: 0.3 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-12 md:p-16 text-center transition-all duration-1000 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
              Comienza a Respirar Mejor Hoy
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Únete a miles de usuarios que ya están tomando decisiones más inteligentes sobre su salud respiratoria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-base" asChild>
                <Link href="/register">
                  Crear Cuenta 
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="#demo">Ver Demostración</Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
