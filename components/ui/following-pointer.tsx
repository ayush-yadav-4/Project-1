"use client"

import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface FollowPointerProps {
  children: React.ReactNode
  title: React.ReactNode
  className?: string
}

export function FollowPointer({ children, title, className }: FollowPointerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {children}
      {isVisible && (
        <div
          className="pointer-events-none fixed z-50 rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-lg whitespace-nowrap"
          style={{
            left: `${position.x + 10}px`,
            top: `${position.y + 10}px`,
          }}
        >
          {title}
        </div>
      )}
    </div>
  )
}

