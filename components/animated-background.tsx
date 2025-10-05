"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  type: "leaf" | "molecule" | "pollen"
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Particle[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.5 + 0.2,
        type: ["leaf", "molecule", "pollen"][Math.floor(Math.random() * 3)] as Particle["type"],
      })
    }

    const drawLeaf = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.fillStyle = "rgb(34, 197, 94)" // green-500
      ctx.beginPath()
      ctx.ellipse(x, y, size, size * 1.5, Math.PI / 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const drawMolecule = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.strokeStyle = "rgb(59, 130, 246)" // blue-500
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x - size, y, size * 0.6, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x + size, y, size * 0.6, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }

    const drawPollen = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.fillStyle = "rgb(251, 191, 36)" // amber-400
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + Math.cos(angle) * size * 1.5, y + Math.sin(angle) * size * 1.5)
        ctx.stroke()
      }
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around screen
        if (particle.y > canvas.height) {
          particle.y = -10
          particle.x = Math.random() * canvas.width
        }
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width

        // Draw particle based on type
        if (particle.type === "leaf") {
          drawLeaf(particle.x, particle.y, particle.size, particle.opacity)
        } else if (particle.type === "molecule") {
          drawMolecule(particle.x, particle.y, particle.size, particle.opacity)
        } else {
          drawPollen(particle.x, particle.y, particle.size, particle.opacity)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20"
      aria-hidden="true"
    />
  )
}
