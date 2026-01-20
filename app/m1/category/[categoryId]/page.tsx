"use client"

import React, { useState } from "react"
import Link from "next/link"
import { MarketplaceLayout } from "@/components/marketplace-layout"
import {
  BarChart3,
  TrendingUp,
  Users,
  Headphones,
  Zap,
  FileText,
  Shield,
  RefreshCw,
  CreditCard,
  Target,
  Briefcase,
  HelpCircle,
  Wrench,
  Server,
  Phone,
  MessageSquare,
  ArrowLeft,
  ThumbsUp,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FollowPointer } from "@/components/ui/following-pointer"
import { useParams } from "next/navigation"
import { allAgents, getIntegrationIcons, suites } from "@/lib/agents-data"
import type { Agent } from "@/lib/agents-data"
import type { LucideIcon } from "lucide-react"
import {
  ShoppingBag,
  Heart,
  Sparkles,
} from "lucide-react"

// Map suites to category icons
const suiteIcons: Record<string, LucideIcon> = {
  "Sales Suite": TrendingUp,
  "Marketing Suite": Target,
  "Customer Service Suite": Headphones,
  "HR & Talent Suite": Users,
  "IT & Operations Suite": Zap,
  "Finance & Banking Suite": CreditCard,
  "Retail & E-Commerce Suite": ShoppingBag,
  "Healthcare Suite": Heart,
  "Cross-Industry Analytics Suite": BarChart3,
  "Community & Innovation Suite": Sparkles,
}

const categories = suites.map(suite => ({
  id: suite.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  label: suite,
  icon: suiteIcons[suite] || FileText,
}))

// Icon components
const InvoiceIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
    <FileText className="w-6 h-6 text-blue-600" />
  </div>
)
const SalesSDRIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
    <Target className="w-6 h-6 text-amber-600" />
  </div>
)
const SalesCoachIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
    <TrendingUp className="w-6 h-6 text-pink-600" />
  </div>
)
const RecruitmentIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
    <Briefcase className="w-6 h-6 text-indigo-600" />
  </div>
)
const HelpdeskIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center">
    <HelpCircle className="w-6 h-6 text-teal-600" />
  </div>
)
const ITHelpDeskIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center">
    <Wrench className="w-6 h-6 text-lime-600" />
  </div>
)
const BankingIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
    <CreditCard className="w-6 h-6 text-red-600" />
  </div>
)
const EnterpriseIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
    <Server className="w-6 h-6 text-orange-600" />
  </div>
)
const ShieldIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
    <Shield className="w-6 h-6 text-purple-600" />
  </div>
)
const RefundIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
    <RefreshCw className="w-6 h-6 text-green-600" />
  </div>
)

// Map agents to display format
const agents = allAgents.map((agent, index) => {
  const iconMap: Record<string, () => React.ReactElement> = {
    "Sales Suite": SalesSDRIcon,
    "Marketing Suite": SalesCoachIcon,
    "Customer Service Suite": HelpdeskIcon,
    "HR & Talent Suite": RecruitmentIcon,
    "IT & Operations Suite": ITHelpDeskIcon,
    "Finance & Banking Suite": BankingIcon,
    "Retail & E-Commerce Suite": EnterpriseIcon,
    "Healthcare Suite": ShieldIcon,
    "Cross-Industry Analytics Suite": SalesCoachIcon,
    "Community & Innovation Suite": RefundIcon,
  }
  
  return {
    id: agent.id,
    name: agent.name,
    description: agent.description,
    suite: agent.suite,
    category: agent.suite,
    icon: iconMap[agent.suite] || InvoiceIcon,
    author: agent.author || "Team",
    likes: agent.likes || 100 + (index % 100),
  }
})

const legacyAgents = [
  {
    id: 1,
    name: "Invoice Processing Agent",
    description: "Automates invoice verification and processing with intelligent document analysis and multi-format support for seamless workflow integration.",
    category: "Finance",
    icon: FileText,
    author: "Sarah Chen",
    likes: 124,
  },
  {
    id: 2,
    name: "HR Recruitment Agent",
    description: "Screens resumes and identifies top candidates using AI-powered matching and skill assessment for faster talent acquisition.",
    category: "HR",
    icon: Briefcase,
    author: "Michael Torres",
    likes: 98,
  },
  {
    id: 3,
    name: "Legal Innovation Agent",
    description: "Streamlines legal research and document preparation with AI-powered case law analysis and intelligent legal document generation.",
    category: "legal",
    icon: RefreshCw,
    author: "Emma Wilson",
    likes: 156,
  },
  {
    id: 4,
    name: "AI Sentiment Analysis",
    description: "Analyzes customer feedback and social media sentiment in real-time across multiple channels with actionable insights and trend detection.",
    category: "Analytics",
    icon: TrendingUp,
    author: "David Park",
    likes: 203,
  },
  {
    id: 5,
    name: "Hotel Profiling Agent",
    description: "Creates comprehensive hotel profiles and recommendations using AI analysis of amenities, reviews, and guest preferences.",
    category: "Hospitality",
    icon: Server,
    author: "Jessica Martinez",
    likes: 287,
  },
  {
    id: 6,
    name: "Enterprise GPT",
    description: "Custom enterprise AI assistant for organizational knowledge with intelligent information retrieval and process automation.",
    category: "Enterprise",
    icon: Server,
    author: "Ryan Thompson",
    likes: 189,
  },
  {
    id: 7,
    name: "AI Sales Coach",
    description: "Provides real-time coaching and sales insights with personalized recommendations and analytics to improve performance metrics.",
    category: "Sales",
    icon: TrendingUp,
    author: "Lisa Anderson",
    likes: 241,
  },
  {
    id: 8,
    name: "LinkedIn Marketing and Lead Generation Agent",
    description: "Automates LinkedIn marketing campaigns with personalized outreach and intelligent prospect identification for maximum engagement.",
    category: "Marketing",
    icon: Target,
    author: "James Lee",
    likes: 175,
  },
  {
    id: 9,
    name: "LinkedIn Sales Agent",
    description: "Manages LinkedIn sales prospecting and outreach with automated lead qualification and personalized relationship building at scale.",
    category: "Sales",
    icon: Briefcase,
    author: "Alex Kumar",
    likes: 312,
  },
  {
    id: 10,
    name: "Meeting of Minutes Agent",
    description: "Automatically captures and summarizes meeting minutes with action item tracking and searchable meeting archives.",
    category: "Productivity",
    icon: FileText,
    author: "Priya Sharma",
    likes: 198,
  },
  {
    id: 11,
    name: "AI Newsletter Agent",
    description: "Creates and personalizes newsletter content automatically with AI-powered curation and optimization for maximum engagement.",
    category: "Marketing",
    icon: MessageSquare,
    author: "Daniel Kim",
    likes: 267,
  },
  {
    id: 12,
    name: "Marketing Customer Lead Agent",
    description:
      "Manages inbound and outbound marketing leads with intelligent scoring, nurturing, and routing into your CRM.",
    category: "Marketing",
    icon: Target,
    author: "Olivia Perez",
    likes: 154,
  },
  {
    id: 13,
    name: "Voice Bot",
    description:
      "Handles customer calls with natural, human-like conversations and intelligent intent recognition across IVR flows.",
    category: "Customer Support",
    icon: Phone,
    author: "Daniel Kim",
    likes: 212,
  },
  {
    id: 14,
    name: "AI Avataar Agent",
    description:
      "Creates interactive AI avatars for customer engagement, sales demos, and onboarding experiences across channels.",
    category: "Marketing",
    icon: MessageSquare,
    author: "Sofia Rossi",
    likes: 187,
  },
  {
    id: 15,
    name: "HR Onboarding and Training Agent",
    description:
      "Guides new hires through onboarding, policies, and training content with personalized learning paths and Q&A.",
    category: "HR",
    icon: Shield,
    author: "Michael Torres",
    likes: 173,
  },
  {
    id: 16,
    name: "Social Intelligence Platform Agent",
    description:
      "Monitors social channels, surfaces insights, and flags brand, competitor, and market signals in real time.",
    category: "Analytics",
    icon: TrendingUp,
    author: "Emma Wilson",
    likes: 201,
  },
  {
    id: 17,
    name: "Autocad Engineering BOM Generator",
    description:
      "Parses engineering drawings to automatically generate accurate bills of materials and export-ready reports.",
    category: "IT Support",
    icon: Wrench,
    author: "Alex Kumar",
    likes: 139,
  },
  {
    id: 18,
    name: "Dimension Measurer Agent",
    description:
      "Measures dimensions from drawings or images and validates them against engineering standards and constraints.",
    category: "IT Support",
    icon: FileText,
    author: "Priya Sharma",
    likes: 128,
  },
]

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.categoryId as string

  const category = categories.find(cat => cat.id === categoryId)
  const categoryAgents = agents.filter(agent => {
    if (categoryId === "all") return true
    const suiteId = categoryId.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    return agent.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === suiteId
  })

  if (!category) {
    return (
      <MarketplaceLayout>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category not found</h1>
            <Link href="/m1">
              <button className="text-primary">Back to Marketplace</button>
            </Link>
          </div>
        </div>
      </MarketplaceLayout>
    )
  }

  // Generate integration icons for each agent
  const getIntegrationIconsForAgent = (agentId: string): Array<{ bg: string; icon?: LucideIcon; label: string; isText?: boolean }> => {
    const agentIdNum = agentId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return getIntegrationIcons(agentIdNum)
  }

  const AgentCard = ({ agent }: { agent: typeof agents[0] }) => {
    const Icon = agent.icon
    const [likes, setLikes] = useState(agent.likes)
    const [isLiked, setIsLiked] = useState(false)
    const integrationIcons = getIntegrationIconsForAgent(agent.id)

    const handleLike = (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsLiked(!isLiked)
      setLikes(isLiked ? likes - 1 : likes + 1)
    }

    return (
      <Link href={`/marketplace/${agent.id}`}>
        <FollowPointer
          title={
            <div className="flex items-center gap-2">
              <Icon />
              <span>{agent.name}</span>
            </div>
          }
          className="cursor-none"
        >
          <Card className="flex flex-col h-full rounded-xl relative bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50 overflow-hidden">
            {/* Card Header Background - light blue */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-br from-blue-50 to-blue-100"></div>

            {/* Integration Icons - positioned below header */}
            <div className="relative px-5 z-10 mt-3 mb-3">
              <div className="flex items-center gap-2">
                {integrationIcons.map((integration, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-8 rounded-md ${integration.bg} flex items-center justify-center shadow-sm shrink-0`}
                  >
                    {integration.isText ? (
                      <span className="text-white text-xs font-semibold">{integration.label}</span>
                    ) : integration.icon ? (
                      <integration.icon className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-white text-xs font-semibold">{integration.label || "?"}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Card Body */}
            <div className="flex-grow flex flex-col gap-2.5 px-5 pb-4 relative z-10">
              {/* Content Section */}
              <div className="block flex-grow">
                <h3 className="text-base font-semibold mb-1.5 p-0 truncate text-gray-900">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 leading-snug">
                  {agent.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 m-0"></div>

              {/* Category Badges */}
              <div className="flex flex-wrap gap-2 rounded-xl w-full">
                <Badge variant="secondary" className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                  {agent.suite}
                </Badge>
              </div>

              {/* Creator and Like Section */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-gray-500">By {agent.author}</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-colors ${isLiked
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                      }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{likes}</span>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </FollowPointer>
      </Link>
    )
  }

  const Icon = category.icon

  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-12">
        {/* Back Button */}
        <Link
          href="/m1"
          className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Marketplace</span>
        </Link>

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{category.label} Agents</h1>
              <p className="text-muted-foreground text-base">
                Explore {categoryAgents.length} agents in this category
              </p>
            </div>
          </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </main>
    </MarketplaceLayout>
  )
}

