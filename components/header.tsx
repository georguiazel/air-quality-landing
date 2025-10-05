"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/oxyra-logo.svg" alt="Oxyra" width={120} height={32} className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Funcionalidades
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#demo"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Comenzar</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
