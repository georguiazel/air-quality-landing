"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AirQualityChart() {
  const hours = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"]
  const data = [35, 42, 38, 45, 52, 48, 42]
  const maxValue = Math.max(...data)

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Tendencia de Calidad del Aire</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            24h
          </Button>
          <Button variant="ghost" size="sm">
            7d
          </Button>
          <Button variant="ghost" size="sm">
            30d
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Chart */}
        <div className="h-[200px] flex items-end justify-between gap-2">
          {data.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-muted rounded-t-lg relative overflow-hidden"
                style={{ height: `${(value / maxValue) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500 to-emerald-400" />
                <div className="absolute inset-x-0 top-0 text-center pt-2">
                  <span className="text-xs font-semibold text-white">{value}</span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{hours[index]}</span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="font-semibold text-emerald-900 dark:text-emerald-100">Tendencia positiva</p>
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                La calidad del aire ha mejorado un 12% hoy
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
