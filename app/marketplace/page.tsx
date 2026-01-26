"use client"

// Fixed: Removed FollowPointer wrappers from Card components to fix visual regression
// FollowPointer was causing washed-out appearance when applied to large card areas
// Cards now render directly with proper opacity and contrast

import Link from "next/link"
import { MarketplaceLayout } from "@/components/marketplace-layout"
import {
  Zap,
  MessageSquare,
  ExternalLink,
  Target,
  TrendingUp,
  Phone,
  Server,
  Wrench,
  Briefcase,
  FileText,
  Shield,
  RefreshCw,
  CreditCard,
  HelpCircle,
  Users,
  BarChart3,
  Headphones,
  ShoppingBag,
  Sparkles,
  Rocket,
  Cpu,
  Globe,
  Lightbulb,
  Star,
  Gem,
  Crown,
  Award,
  Flame,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { allAgents } from "@/lib/agents-data"
import { blueprints } from "@/lib/blueprints-data"
import type { LucideIcon } from "lucide-react"

// Select first 3 blueprints for the marketplace homepage
const featuredBlueprints = blueprints.slice(0, 3)

// Premium icon and color combinations for modern aesthetic
const premiumIconColorSets: Array<{ icon: LucideIcon; color: string; gradient?: string }> = [
  { icon: Sparkles, color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { icon: Rocket, color: "bg-gradient-to-br from-blue-500 to-cyan-500" },
  { icon: Cpu, color: "bg-gradient-to-br from-indigo-500 to-purple-500" },
  { icon: Globe, color: "bg-gradient-to-br from-emerald-500 to-teal-500" },
  { icon: Lightbulb, color: "bg-gradient-to-br from-amber-500 to-orange-500" },
  { icon: Star, color: "bg-gradient-to-br from-rose-500 to-pink-500" },
  { icon: Gem, color: "bg-gradient-to-br from-violet-500 to-purple-500" },
  { icon: Crown, color: "bg-gradient-to-br from-yellow-500 to-amber-500" },
  { icon: Award, color: "bg-gradient-to-br from-blue-600 to-indigo-600" },
  { icon: Flame, color: "bg-gradient-to-br from-red-500 to-orange-500" },
  { icon: Layers, color: "bg-gradient-to-br from-slate-600 to-slate-800" },
  { icon: Zap, color: "bg-gradient-to-br from-yellow-400 to-yellow-600" },
]

// Helper function to get unique premium icon and color for each agent
function getPremiumIconAndColor(agentIndex: number, agentName: string): { icon: LucideIcon; color: string } {
  // Use agent index to cycle through premium sets, ensuring variety
  const setIndex = agentIndex % premiumIconColorSets.length
  const selectedSet = premiumIconColorSets[setIndex]
  
  return {
    icon: selectedSet.icon,
    color: selectedSet.color,
  }
}

// Select 6 diverse agents from allAgents with premium styling
const selectedAgents = allAgents.slice(0, 6).map((agent, index) => {
  const { icon, color } = getPremiumIconAndColor(index, agent.name)
  return {
    id: agent.id,
    name: agent.name,
    color,
    icon,
  }
})

export default function MarketplacePage() {
  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-12">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-4xl font-bold mb-1">Welcome back, You</h1>
              <p className="text-muted-foreground text-base">Build, refine, and productionize agents effortlessly in minutes.</p>
            </div>
            
            {/* Top Right Navigation */}
            <div className="flex items-center gap-3">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <div className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-400 to-orange-200 whitespace-nowrap">
                  AgentMarketplace
                </div>
              </Link>
              <Link href="/blueprints">
                <Button variant="ghost" size="sm" className="gap-2 hover:underline">
                  Tutorials
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Build Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3">Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-green-500/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">Single Agent</h3>
              <p className="text-sm text-muted-foreground">Standalone agent, easy to get started</p>
            </Card>

            <Card className="p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-pink-500/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-pink-600" />
                </div>
                <div className="w-2 h-2 rounded-full bg-pink-500"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">Manager Agent</h3>
              <p className="text-sm text-muted-foreground">Multi-agent, flexible & non-deterministic</p>
            </Card>

            <Card className="p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-blue-500/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">Workflows</h3>
              <p className="text-sm text-muted-foreground">Multi-agent, follows a predefined path</p>
            </Card>
          </div>
        </div>

        {/* Two Column Layout: Blueprints on Left, Pre-built Agents on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Blueprints Column */}
          <div id="blueprints" className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold">Blueprints</h2>
              <Link href="/blueprints">
                <Button variant="ghost" className="text-primary" size="sm">
                  View all
                </Button>
              </Link>
            </div>
            <div className="space-y-2">
              {featuredBlueprints.map((blueprint, index) => {
                // Assign different gradient colors to each blueprint card
                const gradients = [
                  "from-orange-400 to-red-500",
                  "from-green-400 to-yellow-500",
                  "from-blue-400 to-purple-500",
                ]
                const gradient = gradients[index % gradients.length]
                
                return (
                  <Link key={blueprint.id} href={`/blueprints/${blueprint.id}`} className="block">
                    <Card className="p-3 hover:shadow-lg transition-all cursor-pointer border hover:border-primary/50">
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} shrink-0`}></div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-0.5 text-sm leading-tight">{blueprint.name}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{blueprint.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Pre-built Agents Column */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold">Our Agents</h2>
              <Link href="/m1">
                <Button variant="ghost" className="text-primary" size="sm">
                  View all
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {selectedAgents.map((agent) => {
                const IconComponent = agent.icon
                return (
                  <Link key={agent.id} href={`/marketplace/${agent.id}`}>
                    <Card className="p-3 hover:shadow-lg transition-all cursor-pointer h-20 flex flex-row items-center gap-3 border hover:border-primary/50 group">
                      <div className={`w-10 h-10 rounded-lg ${agent.color} flex items-center justify-center shadow-lg shrink-0 transition-transform group-hover:scale-110`}>
                        <IconComponent className="w-5 h-5 text-white drop-shadow-sm" />
                      </div>
                      <h3 className="font-semibold text-sm truncate">{agent.name}</h3>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </MarketplaceLayout>
  )
}
