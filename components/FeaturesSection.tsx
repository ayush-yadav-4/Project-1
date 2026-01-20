"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Archive, Menu, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface Card {
  id: number
  title: string
  subtitle: string
  date: string
  dateLabel: string
  image: string
}

const cards: Card[] = [
  {
    id: 1,
    title: "Unified Control Plane",
    subtitle: "Manage permissions, API keys, and spending limits for your entire agent fleet from one dashboard.",
    date: "Infrastructure",
    dateLabel: "Control",
    image: "/Unified-control.png",
  },
  {
    id: 2,
    title: "Universal Agent Protocol",
    subtitle: "Standardized interface for any agent. Switch providers instantly without rewriting integration code.",
    date: "Standards",
    dateLabel: "Protocol",
    image: "/Universal-Agent.png",
  },
  {
    id: 3,
    title: "Enterprise Guardrails",
    subtitle: "Pre-configured SOC2 and GDPR compliance checks that run before any agent executes a task.",
    date: "Security",
    dateLabel: "Security",
    image: "/Enterprise-Guardrails.png",
  },
  {
    id: 4,
    title: "Full-Trace Audit Logs",
    subtitle: "Record every thought, API call, and decision made by autonomous agents for complete accountability.",
    date: "Compliance",
    dateLabel: "Audit",
    image: "/ull-Trace Audit Logs.png",
  },
  {
    id: 5,
    title: "Private VPC Deployment",
    subtitle: "Deploy marketplace agents directly into your secure cloud environment with zero data egress.",
    date: "Deployment",
    dateLabel: "Private",
    image: "/Private VPC Deployment.png",
  },
  {
    id: 6,
    title: "Consolidated Billing",
    subtitle: "One invoice for usage across 200+ agent providers. Simplify procurement and cost allocation.",
    date: "Finance",
    dateLabel: "Billing",
    image: "/Consolidated Billing.png",
  },
  {
    id: 7,
    title: "Automated Evaluations",
    subtitle: "Continuous benchmarking of agent performance against custom test sets and golden datasets.",
    date: "Quality",
    dateLabel: "Evals",
    image: "/Automated Evaluations.png",
  },
  {
    id: 8,
    title: "Instant Agent Discovery",
    subtitle: "Find verified experts for any task—from coding to legal analysis—vetted by our community.",
    date: "Marketplace",
    dateLabel: "Discover",
    image: "/Instant Agent Discovery.png",
  },
  {
    id: 9,
    title: "Native SDKs & Hooks",
    subtitle: "Drop-in React components and Python SDKs to embed agent capabilities into your product in minutes.",
    date: "Developer",
    dateLabel: "SDKs",
    image: "/Native SDKs & Hooks.png",
  },
  {
    id: 10,
    title: "Role-Based Access",
    subtitle: "Granular permission scopes ensure agents only access the specific data they need to function.",
    date: "Security",
    dateLabel: "RBAC",
    image: "/Experts.png",
  },
  {
    id: 11,
    title: "Human-in-the-Loop",
    subtitle: "Seamlessly route high-stakes decisions to human reviewers before final execution.",
    date: "Workflow",
    dateLabel: "Review",
    image: "/signupbg.png",
  },
  {
    id: 12,
    title: "Multi-Agent Orchestration",
    subtitle: "Chain multiple specialized agents together to solve complex, multi-step business problems.",
    date: "Orchestration",
    dateLabel: "Chaining",
    image: "/Footer.png",
  },
]

export default function FeaturesSection() {
  const [position, setPosition] = useState(0)
  const [viewMode, setViewMode] = useState<"stack" | "list">("list")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef(0)

  useEffect(() => {
    positionRef.current = position
  }, [position])

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 1024) {
        setViewMode("list")
      }
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleScroll = (e: WheelEvent) => {
    if (viewMode !== "stack") return

    // Check if mouse is within the central card area (800px width)
    const containerWidth = window.innerWidth
    const cardAreaWidth = Math.min(800, containerWidth - 40) // Responsive width
    const leftBound = (containerWidth - cardAreaWidth) / 2
    const rightBound = (containerWidth + cardAreaWidth) / 2
    
    // If mouse is outside the card area, allow default scroll
    if (e.clientX < leftBound || e.clientX > rightBound) return

    e.preventDefault()


    const scrollSensitivity = 0.008
    const delta = e.deltaY * scrollSensitivity

    setPosition((prev) => {
      const newPosition = prev + delta
      return newPosition
    })
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false })
      return () => container.removeEventListener("wheel", handleScroll)
    }
  }, [viewMode])

  const handleTimelineClick = (index: number) => {
    const rounds = Math.round((position - index) / cards.length)
    setPosition(index + rounds * cards.length)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const activeIndex = ((Math.round(position) % cards.length) + cards.length) % cards.length

  return (
    <div className="bg-white w-full py-28">
      {/* Section Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center relative z-10 mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-orange-200 mb-4 tracking-tight">The Operating System for AI Agents</h2>
        <p className="text-2xl font-medium text-black">Standardize, Secure, and Scale your AI Workforce</p>
      </motion.div>
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >
      

      {/* Header Navigation */}
      <div className="absolute right-6 top-6 z-50 flex items-center gap-1 rounded-lg border border-neutral-200 bg-white/80 p-1 shadow-sm backdrop-blur-sm">
        <button
          className={`rounded-md p-2 transition-colors ${viewMode === "stack" ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
          onClick={() => setViewMode("stack")}
        >
          <Archive className="h-5 w-5 text-neutral-700" />
        </button>
        <button
          className={`rounded-md p-2 transition-colors ${viewMode === "list" ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
          onClick={() => setViewMode("list")}
        >
          <Menu className="h-5 w-5 text-neutral-700" />
        </button>
      </div>

      {viewMode === "stack" ? (
        <>
          {/* Cards Stack */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1500px" }}>
            <div className="relative h-[400px] w-[90%] lg:h-[600px] lg:w-[800px]" style={{ transformStyle: "preserve-3d" }}>
              {Array.from({ length: 15 }).map((_, i) => {
                const index = Math.floor(position) + 7 - i
                const distanceFromActive = index - position
                const cardIndex = ((index % cards.length) + cards.length) % cards.length
                const card = cards[cardIndex]

                if (distanceFromActive < -1.5 || distanceFromActive > 5) {
                  return null
                }

                const isBehind = distanceFromActive > 0
                const isInFront = distanceFromActive < 0

                const translateZ = distanceFromActive * -60
                const translateY = distanceFromActive * -30
                const scale = 1 - Math.abs(distanceFromActive) * 0.03

                let opacity = 1
                if (isInFront) {
                  opacity = Math.max(0, 1 + distanceFromActive * 2)
                }

                return (
                  <div
                    key={`${card.id}-${index}`}
                    className="absolute inset-0"
                    style={{
                      transform: `translateZ(${translateZ}px) translateY(${translateY}px) scale(${Math.max(0.7, scale)})`,
                      opacity: Math.max(0, opacity),
                      zIndex: Math.round((cards.length - Math.abs(distanceFromActive)) * 10),
                      transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
                      pointerEvents: Math.abs(distanceFromActive) < 0.5 ? "auto" : "none",
                    }}
                    onClick={() => handleTimelineClick(cardIndex)}
                  >
                    <div className="h-full w-full overflow-hidden bg-white shadow-2xl">
                      <div className="relative h-[65%] overflow-hidden bg-neutral-200">
                        <img
                          src={card.image || "/placeholder.svg"}
                          alt={card.title}
                          className="h-full w-full object-cover"
                        />
                        {isBehind && (
                          <div
                            className="absolute inset-0 bg-black"
                            style={{
                              opacity: Math.min(0.3, Math.abs(distanceFromActive) * 0.08),
                            }}
                          />
                        )}
                      </div>
                      <div className="bg-white p-8">
                        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">{card.title}</h2>
                        <p className="mt-2 text-lg text-neutral-500">{card.subtitle}</p>
                        <p className="mt-3 text-sm text-neutral-400">{card.date}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="hidden lg:flex absolute bottom-20 right-8 top-20 z-40 flex-col items-end justify-between py-8">
            {cards.map((card, index) => {
              const isActive = index === activeIndex
              const isNow = index === 0

              return (
                <button
                  key={card.id}
                  className="group flex items-center gap-2 transition-all duration-300"
                  onClick={() => handleTimelineClick(index)}
                >
                  <span
                    className={`text-sm font-medium transition-all duration-300 ${
                      isActive ? "text-orange-500" : "text-neutral-400 group-hover:text-neutral-600"
                    }`}
                  >
                    {isNow ? "Now" : card.dateLabel}
                  </span>
                  <div className="relative flex items-center">
                    <div
                      className={`h-0.5 transition-all duration-300 ${
                        isActive ? "w-8 bg-orange-500" : "w-4 bg-neutral-300 group-hover:w-6 group-hover:bg-neutral-400"
                      }`}
                    />
                    {isActive && <div className="absolute -right-1 h-2 w-2 rounded-full bg-orange-500" />}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-neutral-400">
            Scroll or click timeline to navigate
          </div>
        </>
      ) : (
        <>
          <div className="mx-auto max-w-5xl px-6 pb-12 pt-24">
            <div className="divide-y divide-neutral-200">
              {cards.map((card, index) => (
                <button
                  key={card.id}
                  className="group flex w-full items-center gap-6 py-4 text-left transition-colors hover:bg-neutral-50"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setViewMode("stack")
                    setPosition(index)
                  }}
                >
                  <span className="w-32 shrink-0 text-sm text-neutral-400">
                    {card.date.split(",")[0]}, {card.date.split(",")[1]?.trim().split(" ")[0]}
                  </span>
                  <span className="min-w-0 shrink-0 font-medium text-neutral-900" style={{ width: "280px" }}>
                    {card.title}
                  </span>
                  <span className="min-w-0 flex-1 text-neutral-400">{card.subtitle}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-neutral-300 transition-transform group-hover:translate-x-1 group-hover:text-neutral-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Floating preview image */}
          {hoveredIndex !== null && (
            <div
              className="pointer-events-none fixed z-50 overflow-hidden shadow-2xl transition-opacity duration-200"
              style={{
                left: mousePos.x + 20,
                top: mousePos.y - 100,
                width: 280,
                height: 180,
              }}
            >
              <img
                src={cards[hoveredIndex].image || "/placeholder.svg"}
                alt={cards[hoveredIndex].title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </>
      )}
    </div>
    </div>
  )
}
