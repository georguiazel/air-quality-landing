// Alert service for managing SMS and WhatsApp notifications

export interface AlertConfig {
  smsEnabled: boolean
  whatsappEnabled: boolean
  emailEnabled: boolean
  phoneNumber: string
  email: string
  interval: number
  threshold: number
  realtime: boolean
}

export interface Alert {
  type: "sms" | "whatsapp" | "email"
  title: string
  message: string
  timestamp: Date
  aqi: number
}

export class AlertService {
  private static instance: AlertService
  private config: AlertConfig | null = null
  private lastAlertTime: Date | null = null

  private constructor() {}

  static getInstance(): AlertService {
    if (!AlertService.instance) {
      AlertService.instance = new AlertService()
    }
    return AlertService.instance
  }

  setConfig(config: AlertConfig) {
    this.config = config
    console.log("[v0] Alert configuration updated:", config)
  }

  getConfig(): AlertConfig | null {
    return this.config
  }

  async sendAlert(aqi: number, quality: string): Promise<void> {
    if (!this.config) {
      console.log("[v0] No alert configuration found")
      return
    }

    // Check if enough time has passed since last alert
    if (this.lastAlertTime) {
      const minutesSinceLastAlert = (Date.now() - this.lastAlertTime.getTime()) / 1000 / 60
      if (minutesSinceLastAlert < this.config.interval) {
        console.log("[v0] Alert interval not reached yet")
        return
      }
    }

    // Check if AQI exceeds threshold
    if (aqi < this.config.threshold) {
      console.log("[v0] AQI below threshold, no alert needed")
      return
    }

    const alert: Alert = {
      type: "whatsapp",
      title: "Alerta de Calidad del Aire",
      message: `La calidad del aire es ${quality}. AQI: ${aqi}`,
      timestamp: new Date(),
      aqi,
    }

    // Send alerts based on configuration
    if (this.config.smsEnabled) {
      await this.sendSMS(alert)
    }

    if (this.config.whatsappEnabled) {
      await this.sendWhatsApp(alert)
    }

    if (this.config.emailEnabled) {
      await this.sendEmail(alert)
    }

    this.lastAlertTime = new Date()
  }

  async sendFirstTimeAlert(aqi: number, quality: string): Promise<void> {
    if (!this.config) return

    const alert: Alert = {
      type: "whatsapp",
      title: "Bienvenido a Oxira",
      message: `Gracias por registrarte. La calidad del aire actual es ${quality} (AQI: ${aqi})`,
      timestamp: new Date(),
      aqi,
    }

    if (this.config.smsEnabled) {
      await this.sendSMS(alert)
    }

    if (this.config.whatsappEnabled) {
      await this.sendWhatsApp(alert)
    }
  }

  private async sendSMS(alert: Alert): Promise<void> {
    console.log("[v0] Sending SMS:", alert)
    // Simulate SMS sending
    // In production, integrate with Twilio or similar service
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }

  private async sendWhatsApp(alert: Alert): Promise<void> {
    console.log("[v0] Sending WhatsApp:", alert)
    // Simulate WhatsApp sending
    // In production, integrate with WhatsApp Business API
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }

  private async sendEmail(alert: Alert): Promise<void> {
    console.log("[v0] Sending Email:", alert)
    // Simulate email sending
    // In production, integrate with SendGrid, Resend, or similar service
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }
}
