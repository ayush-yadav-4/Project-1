"use client"

import { useState } from "react"
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

const categories = [
  { id: "finance", label: "Finance", icon: BarChart3 },
  { id: "sales", label: "Sales", icon: TrendingUp },
  { id: "hr", label: "HR", icon: Users },
  { id: "legal", label: "Legal", icon: Shield },
  { id: "marketing", label: "Marketing", icon: Target },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "hospitality", label: "Hospitality", icon: Server },
  { id: "enterprise", label: "Enterprise", icon: Server },
  { id: "productivity", label: "Productivity", icon: FileText },
  { id: "it", label: "IT Support", icon: Zap },
  { id: "support", label: "Customer Support", icon: Headphones },
]

const agents = [
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
    const categoryMap: Record<string, string> = {
      finance: "Finance",
      sales: "Sales",
      hr: "HR",
       legal: "Legal",
       marketing: "Marketing",
       analytics: "Analytics",
       hospitality: "Hospitality",
       enterprise: "Enterprise",
       productivity: "Productivity",
      it: "IT Support",
      support: "Customer Support",
    }
    return agent.category === categoryMap[categoryId] || agent.category === categoryId
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

  const AgentCard = ({ agent }: { agent: typeof agents[0] }) => {
    const Icon = agent.icon
    const [likes, setLikes] = useState(agent.likes)
    const [isLiked, setIsLiked] = useState(false)

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
          <Card className="flex flex-col h-full rounded-xl relative bg-card border border-border hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50 overflow-hidden group">
            {/* Card Header Background - extends beneath the logo */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20"></div>

            {/* Icon positioned centrally on the edge between header and content */}
            <div className="relative px-5 z-10 mt-4 mb-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-card dark:bg-card border border-border shadow-sm shrink-0 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Card Body */}
            <div className="flex-grow flex flex-col gap-2.5 px-5 pb-4 relative z-10 -mt-6">
              {/* Content Section */}
              <div className="block flex-grow">
                <h3 className="text-base font-semibold mb-1.5 p-0 truncate text-foreground">
                  {agent.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-snug">
                  {agent.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border m-0"></div>

              {/* Category Badges */}
              <div className="flex flex-wrap gap-2 rounded-xl w-full">
                <Badge variant="secondary" className="text-xs font-medium px-2 py-0.5 rounded-full">
                  {agent.category}
                </Badge>
              </div>

              {/* Creator and Like Section */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-muted-foreground">By {agent.author}</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-colors ${isLiked
                      ? "text-blue-600 bg-blue-50"
                      : "text-muted-foreground bg-muted hover:bg-accent"
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
      <main className="p-6 md:p-12 bg-white">
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

