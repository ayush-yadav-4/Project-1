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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"


const blueprints = [
  {
    id: 1,
    name: "Open Source Perplexity",
    description: "A self-hosted, open-source AI-powered search engine that combines the power of multiple data sources to provide comprehensive answers.",
    gradient: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    name: "McKinsey Lilli Clone",
    description: "This agent helps in accessing information from both internal and external data sources to provide strategic insights and recommendations.",
    gradient: "from-green-400 to-yellow-500",
  },
  {
    id: 3,
    name: "Market Color Analyst Agent",
    description: "An intelligent agent system that automatically generates professional Market Color Analysis reports for investment decisions.",
    gradient: "from-blue-400 to-purple-500",
  },
]

const preBuiltAgents = [
  { id: 1, name: "Invoice Processing Agent", color: "bg-blue-500", icon: FileText },
  { id: 5, name: "Hotel Profiling Agent", color: "bg-amber-500", icon: Server },
  { id: 2, name: "HR Recruitment Agent", color: "bg-indigo-500", icon: Briefcase },
  { id: 9, name: "LinkedIn Sales Agent", color: "bg-lime-500", icon: Target },
  { id: 10, name: "Meeting of Minutes Agent", color: "bg-cyan-500", icon: FileText },
  { id: 11, name: "AI Newsletter Agent", color: "bg-pink-500", icon: MessageSquare },
]

export default function MarketplacePage() {
  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-12 bg-white">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-4xl font-bold mb-1 text-gray-900">Welcome back, You</h1>
              <p className="text-muted-foreground text-base">Build, refine, and productionize agents effortlessly in minutes.</p>
            </div>
            
            {/* Top Right Navigation */}
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="gap-2">
                Docs
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                APIs
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                Tutorials
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Build Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-5 bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-green-500/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Single Agent</h3>
              <p className="text-sm text-muted-foreground">Standalone agent, easy to get started</p>
            </Card>

            <Card className="p-5 bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-pink-500/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-pink-600" />
                </div>
                <div className="w-2 h-2 rounded-full bg-pink-500"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Manager Agent</h3>
              <p className="text-sm text-muted-foreground">Multi-agent, flexible & non-deterministic</p>
            </Card>

            <Card className="p-5 bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-blue-500/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Workflows</h3>
              <p className="text-sm text-muted-foreground">Multi-agent, follows a predefined path</p>
            </Card>
          </div>
        </div>

        {/* Two Column Layout: Blueprints on Left, Pre-built Agents on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Blueprints Column */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Blueprints</h2>
              <Button variant="ghost" className="text-primary" size="sm">
                View all
              </Button>
            </div>
            <div className="space-y-3">
              {blueprints.map((blueprint) => (
                <Card key={blueprint.id} className="p-3 bg-white hover:shadow-lg transition-all cursor-pointer border hover:border-primary/50">
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${blueprint.gradient} shrink-0`}></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1 text-sm text-gray-900">{blueprint.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{blueprint.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Pre-built Agents Column */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Agents</h2>
              <Link href="/m1">
                <Button variant="ghost" className="text-primary" size="sm">
                  View all
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {preBuiltAgents.map((agent) => {
                const IconComponent = agent.icon
                return (
                  <Link key={agent.id} href={`/marketplace/${agent.id}`}>
                    <Card className="p-3 bg-white hover:shadow-lg transition-all cursor-pointer h-20 flex flex-row items-center gap-3 border hover:border-primary/50">
                      <div className={`w-10 h-10 rounded-lg ${agent.color} flex items-center justify-center shadow-md shrink-0`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm truncate text-gray-900">{agent.name}</h3>
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
