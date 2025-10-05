import { AlertsConfiguration } from "@/components/alerts/alerts-configuration"
import { AlertsHistory } from "@/components/alerts/alerts-history"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Configuración de Alertas</h1>
          <p className="text-muted-foreground">
            Configura cómo y cuándo quieres recibir notificaciones sobre la calidad del aire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AlertsConfiguration />
          </div>
          <div>
            <AlertsHistory />
          </div>
        </div>
      </main>
    </div>
  )
}
