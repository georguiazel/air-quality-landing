"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MessageSquare, Mail, Save } from "lucide-react"

export function AlertsConfiguration() {
  const [config, setConfig] = useState({
    smsEnabled: true,
    whatsappEnabled: true,
    emailEnabled: false,
    phoneNumber: "+1234567890",
    email: "user@example.com",
    interval: "30",
    threshold: "50",
    realtime: true,
  })

  const handleSave = () => {
    console.log("[v0] Saving alerts configuration:", config)
    // Simulate API call
    alert("Configuración guardada exitosamente")
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Canales de Notificación</h2>
          <p className="text-sm text-muted-foreground">Selecciona cómo quieres recibir las alertas</p>
        </div>

        {/* SMS Configuration */}
        <div className="space-y-4 p-4 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <Label htmlFor="sms" className="text-base font-semibold">
                  Alertas por SMS
                </Label>
                <p className="text-sm text-muted-foreground">
                  Recibe mensajes de texto cuando la calidad del aire cambie
                </p>
              </div>
            </div>
            <Switch
              id="sms"
              checked={config.smsEnabled}
              onCheckedChange={(checked) => setConfig({ ...config, smsEnabled: checked })}
            />
          </div>
          {config.smsEnabled && (
            <div className="ml-14 space-y-2">
              <Label htmlFor="phone">Número de teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={config.phoneNumber}
                onChange={(e) => setConfig({ ...config, phoneNumber: e.target.value })}
                placeholder="+1234567890"
              />
            </div>
          )}
        </div>

        {/* WhatsApp Configuration */}
        <div className="space-y-4 p-4 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <Label htmlFor="whatsapp" className="text-base font-semibold">
                  Alertas por WhatsApp
                </Label>
                <p className="text-sm text-muted-foreground">Recibe notificaciones directamente en WhatsApp</p>
              </div>
            </div>
            <Switch
              id="whatsapp"
              checked={config.whatsappEnabled}
              onCheckedChange={(checked) => setConfig({ ...config, whatsappEnabled: checked })}
            />
          </div>
          {config.whatsappEnabled && (
            <div className="ml-14 space-y-2">
              <Label htmlFor="whatsapp-phone">Número de WhatsApp</Label>
              <Input
                id="whatsapp-phone"
                type="tel"
                value={config.phoneNumber}
                onChange={(e) => setConfig({ ...config, phoneNumber: e.target.value })}
                placeholder="+1234567890"
              />
            </div>
          )}
        </div>

        {/* Email Configuration */}
        <div className="space-y-4 p-4 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <Label htmlFor="email" className="text-base font-semibold">
                  Alertas por Email
                </Label>
                <p className="text-sm text-muted-foreground">Recibe resúmenes diarios por correo electrónico</p>
              </div>
            </div>
            <Switch
              id="email"
              checked={config.emailEnabled}
              onCheckedChange={(checked) => setConfig({ ...config, emailEnabled: checked })}
            />
          </div>
          {config.emailEnabled && (
            <div className="ml-14 space-y-2">
              <Label htmlFor="email-address">Correo electrónico</Label>
              <Input
                id="email-address"
                type="email"
                value={config.email}
                onChange={(e) => setConfig({ ...config, email: e.target.value })}
                placeholder="user@example.com"
              />
            </div>
          )}
        </div>

        {/* Alert Settings */}
        <div className="space-y-4 p-4 rounded-lg border border-border bg-muted/30">
          <h3 className="font-semibold">Configuración de Alertas</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="interval">Intervalo de notificaciones (minutos)</Label>
              <Input
                id="interval"
                type="number"
                value={config.interval}
                onChange={(e) => setConfig({ ...config, interval: e.target.value })}
                placeholder="30"
                min="5"
                max="1440"
              />
              <p className="text-xs text-muted-foreground">Frecuencia mínima entre alertas (5-1440 minutos)</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="threshold">Umbral de calidad del aire (AQI)</Label>
              <Input
                id="threshold"
                type="number"
                value={config.threshold}
                onChange={(e) => setConfig({ ...config, threshold: e.target.value })}
                placeholder="50"
                min="0"
                max="500"
              />
              <p className="text-xs text-muted-foreground">Recibir alerta cuando el AQI supere este valor</p>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background">
              <div>
                <Label htmlFor="realtime" className="font-semibold">
                  Notificaciones en tiempo real (PWA)
                </Label>
                <p className="text-sm text-muted-foreground">
                  Recibe alertas instantáneas cuando la calidad del aire cambie
                </p>
              </div>
              <Switch
                id="realtime"
                checked={config.realtime}
                onCheckedChange={(checked) => setConfig({ ...config, realtime: checked })}
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancelar</Button>
          <Button onClick={handleSave} className="gap-2">
            <Save className="w-4 h-4" />
            Guardar configuración
          </Button>
        </div>
      </div>
    </Card>
  )
}
