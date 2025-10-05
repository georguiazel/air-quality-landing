import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { AirQualityDemo } from "@/components/air-quality-demo"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UIShowcase } from "@/components/ui-showcase"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <AirQualityDemo />
      <Features />
      <UIShowcase />
      <HowItWorks />
      <CTA />
      <Footer />
      <PWAInstallPrompt />
    </main>
  )
}
