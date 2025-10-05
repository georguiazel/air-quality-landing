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
          <h2 className="text-2xl font-semibold mb-2">Notification Channels</h2>
          <p className="text-sm text-muted-foreground">Select how you'd like to receive alerts</p>
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
                  SMS Alerts
                </Label>
                <p className="text-sm text-muted-foreground">Receive text messages when air quality changes</p>
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
              <Label htmlFor="phone">Phone number</Label>
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
                  WhatsApp Alerts
                </Label>
                <p className="text-sm text-muted-foreground">Receive notifications directly on WhatsApp</p>
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
              <Label htmlFor="whatsapp-phone">WhatsApp number</Label>
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
                  Email Alerts
                </Label>
                <p className="text-sm text-muted-foreground">Receive daily summaries by email</p>
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
              <Label htmlFor="email-address">Email</Label>
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
          <h3 className="font-semibold">Alert Settings</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="interval">Notification interval (minutes)</Label>
              <Input
                id="interval"
                type="number"
                value={config.interval}
                onChange={(e) => setConfig({ ...config, interval: e.target.value })}
                placeholder="30"
                min="5"
                max="1440"
              />
              <p className="text-xs text-muted-foreground">Minimum frequency between alerts (5-1440 minutes)</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="threshold">Air Quality Threshold (AQI)</Label>
              <Input
                id="threshold"
                type="number"
                value={config.threshold}
                onChange={(e) => setConfig({ ...config, threshold: e.target.value })}
                placeholder="50"
                min="0"
                max="500"
              />
              <p className="text-xs text-muted-foreground">Receive an alert when the AQI exceeds this value</p>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background">
              <div>
                <Label htmlFor="realtime" className="font-semibold">Real-time notifications (PWA)</Label>
                <p className="text-sm text-muted-foreground">Receive instant alerts when air quality changes</p>
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
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSave} className="gap-2">
            <Save className="w-4 h-4" />
            Save settings
          </Button>
        </div>
      </div>
    </Card>
  )
}
