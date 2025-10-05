"use client"

import Link from "next/link"
import { Bell, Settings, User, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

export function DashboardHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">AT</span>
            </div>
            <span className="font-bold text-xl">AireTEMPO</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link href="/dashboard">
              <Button variant={pathname === "/dashboard" ? "default" : "ghost"} size="sm" className="gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/alerts">
              <Button variant={pathname === "/alerts" ? "default" : "ghost"} size="sm" className="gap-2">
                <Bell className="w-4 h-4" />
                Alertas
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
