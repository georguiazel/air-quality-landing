"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AirQualityMap() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Mapa de Calidad del Aire</h2>
        </div>
        <Button variant="ghost" size="icon">
          <Maximize2 className="w-4 h-4" />
        </Button>
      </div>

      <div className="relative w-full h-[400px] bg-muted rounded-lg overflow-hidden">
        {/* Map placeholder with interactive markers */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="relative w-full h-full">
              {/* Simulated map with markers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20" />

              {/* Air quality markers */}
              <div className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full bg-emerald-500/80 flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                42
              </div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-amber-500/80 flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                78
              </div>
              <div className="absolute bottom-1/3 left-1/2 w-12 h-12 rounded-full bg-emerald-500/80 flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                35
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <p className="text-xs font-semibold mb-2">Índice de Calidad</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs">Bueno (0-50)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="text-xs">Moderado (51-100)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-xs">Malo (101+)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
        <span>Última actualización: hace 5 minutos</span>
        <span>Datos TEMPO en tiempo real</span>
      </div>
    </Card>
  )
}
