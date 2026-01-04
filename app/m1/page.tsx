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
  Search,
  RefreshCw as RefreshIcon,
  ThumbsUp,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FollowPointer } from "@/components/ui/following-pointer"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { LucideIcon } from "lucide-react"

// Premium icon components with colored backgrounds
const InvoiceIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
    <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  </div>
)

const ShieldIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
    <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
  </div>
)

const RefundIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-950 flex items-center justify-center">
    <RefreshCw className="w-6 h-6 text-green-600 dark:text-green-400" />
  </div>
)

const BankingIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-950 flex items-center justify-center">
    <CreditCard className="w-6 h-6 text-red-600 dark:text-red-400" />
  </div>
)

const SalesSDRIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-950 flex items-center justify-center">
    <Target className="w-6 h-6 text-amber-600 dark:text-amber-400" />
  </div>
)

const SalesCoachIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-950 flex items-center justify-center">
    <TrendingUp className="w-6 h-6 text-pink-600 dark:text-pink-400" />
  </div>
)

const RecruitmentIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center">
    <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
  </div>
)

const HelpdeskIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-950 flex items-center justify-center">
    <HelpCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />
  </div>
)

const ITHelpDeskIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-lime-100 dark:bg-lime-950 flex items-center justify-center">
    <Wrench className="w-6 h-6 text-lime-600 dark:text-lime-400" />
  </div>
)

const EnterpriseIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center">
    <Server className="w-6 h-6 text-orange-600 dark:text-orange-400" />
  </div>
)

const VoiceBotIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center">
    <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
  </div>
)

const ChatSupportIcon = () => (
  <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-950 flex items-center justify-center">
    <MessageSquare className="w-6 h-6 text-pink-600 dark:text-pink-400" />
  </div>
)

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
    category: "finance",
    icon: InvoiceIcon,
    author: "Sarah Chen",
    likes: 124,
  },
  {
    id: 2,
    name: "HR Recruitment Agent",
    description: "Screens resumes and identifies top candidates using AI-powered matching and skill assessment for faster talent acquisition.",
    category: "hr",
    icon: RecruitmentIcon,
    author: "Michael Torres",
    likes: 98,
  },
  {
    id: 3,
    name: "Legal Innovation Agent",
    description: "Streamlines legal research and document preparation with AI-powered case law analysis and intelligent legal document generation.",
    category: "legal",
    icon: RefundIcon,
    author: "Emma Wilson",
    likes: 156,
  },
  {
    id: 4,
    name: "AI Sentiment Analysis",
    description: "Analyzes customer feedback and social media sentiment in real-time across multiple channels with actionable insights and trend detection.",
    category: "analytics",
    icon: SalesCoachIcon,
    author: "David Park",
    likes: 203,
  },
  {
    id: 5,
    name: "Hotel Profiling Agent",
    description: "Creates comprehensive hotel profiles and recommendations using AI analysis of amenities, reviews, and guest preferences.",
    category: "hospitality",
    icon: EnterpriseIcon,
    author: "Jessica Martinez",
    likes: 287,
  },
  {
    id: 6,
    name: "Enterprise GPT",
    description: "Custom enterprise AI assistant for organizational knowledge with intelligent information retrieval and process automation.",
    category: "enterprise",
    icon: EnterpriseIcon,
    author: "Ryan Thompson",
    likes: 189,
  },
  {
    id: 7,
    name: "AI Sales Coach",
    description: "Provides real-time coaching and sales insights with personalized recommendations and analytics to improve performance metrics.",
    category: "sales",
    icon: SalesCoachIcon,
    author: "Lisa Anderson",
    likes: 241,
  },
  {
    id: 8,
    name: "LinkedIn Marketing and Lead Generation Agent",
    description: "Automates LinkedIn marketing campaigns with personalized outreach and intelligent prospect identification for maximum engagement.",
    category: "marketing",
    icon: SalesSDRIcon,
    author: "James Lee",
    likes: 175,
  },
  {
    id: 9,
    name: "LinkedIn Sales Agent",
    description: "Manages LinkedIn sales prospecting and outreach with automated lead qualification and personalized relationship building at scale.",
    category: "sales",
    icon: RecruitmentIcon,
    author: "Alex Kumar",
    likes: 312,
  },
  {
    id: 10,
    name: "Meeting of Minutes Agent",
    description: "Automatically captures and summarizes meeting minutes with action item tracking and searchable meeting archives.",
    category: "productivity",
    icon: InvoiceIcon,
    author: "Priya Sharma",
    likes: 198,
  },
  {
    id: 11,
    name: "AI Newsletter Agent",
    description: "Creates and personalizes newsletter content automatically with AI-powered curation and optimization for maximum engagement.",
    category: "marketing",
    icon: ChatSupportIcon,
    author: "Daniel Kim",
    likes: 267,
  },
  {
    id: 12,
    name: "Marketing Customer Lead Agent",
    description:
      "Manages inbound and outbound marketing leads with intelligent scoring, nurturing, and routing into your CRM.",
    category: "marketing",
    icon: SalesSDRIcon,
    author: "Olivia Perez",
    likes: 154,
  },
  {
    id: 13,
    name: "Voice Bot",
    description:
      "Handles customer calls with natural, human-like conversations and intelligent intent recognition across IVR flows.",
    category: "support",
    icon: VoiceBotIcon,
    author: "Daniel Kim",
    likes: 212,
  },
  {
    id: 14,
    name: "AI Avataar Agent",
    description:
      "Creates interactive AI avatars for customer engagement, sales demos, and onboarding experiences across channels.",
    category: "marketing",
    icon: ChatSupportIcon,
    author: "Sofia Rossi",
    likes: 187,
  },
  {
    id: 15,
    name: "HR Onboarding and Training Agent",
    description:
      "Guides new hires through onboarding, policies, and training content with personalized learning paths and Q&A.",
    category: "hr",
    icon: ShieldIcon,
    author: "Michael Torres",
    likes: 173,
  },
  {
    id: 16,
    name: "Social Intelligence Platform Agent",
    description:
      "Monitors social channels, surfaces insights, and flags brand, competitor, and market signals in real time.",
    category: "analytics",
    icon: SalesCoachIcon,
    author: "Emma Wilson",
    likes: 201,
  },
  {
    id: 17,
    name: "Autocad Engineering BOM Generator",
    description:
      "Parses engineering drawings to automatically generate accurate bills of materials and export-ready reports.",
    category: "it",
    icon: ITHelpDeskIcon,
    author: "Alex Kumar",
    likes: 139,
  },
  {
    id: 18,
    name: "Dimension Measurer Agent",
    description:
      "Measures dimensions from drawings or images and validates them against engineering standards and constraints.",
    category: "it",
    icon: InvoiceIcon,
    author: "Priya Sharma",
    likes: 128,
  },
]

export default function M1Page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || agent.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
          <Card className="flex flex-col h-full rounded-xl relative bg-card border border-border hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50 overflow-hidden">
            {/* Card Header Background - extends beneath the logo */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20"></div>

            {/* Icon positioned centrally on the edge between header and content */}
            <div className="relative px-5 z-10 mt-4 mb-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-card dark:bg-card border border-border shadow-sm shrink-0 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors">
                <Icon />
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
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs transition-colors shadow-sm ${isLiked
                    ? "text-blue-600 bg-blue-50"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{likes}</span>
                </button>
              </div>
            </div>
          </Card>
        </FollowPointer>
      </Link>
    )
  }

  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-12 bg-white">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Agent Marketplace</h1>
          <p className="text-muted-foreground text-base max-w-3xl">
            Discover and explore a collection of Agents built by us and our community. Find the perfect agent to enhance your workflow.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search agents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-background"
            />
          </div>
          <Button variant="ghost" size="icon" className="shrink-0 bg-background">
            <RefreshIcon className="w-5 h-5" />
          </Button>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[150px] bg-background">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[150px] bg-background">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[150px] bg-background">
              <SelectValue placeholder="Select Function" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Functions</SelectItem>
              <SelectItem value="automation">Automation</SelectItem>
              <SelectItem value="analysis">Analysis</SelectItem>
              <SelectItem value="support">Support</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[140px] bg-background">
              <SelectValue placeholder="All Agents" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Agents</SelectItem>
              <SelectItem value="community">Community</SelectItem>
              <SelectItem value="myagents">My Agents</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {/* All Categories Button */}
            <button
              onClick={() => setSelectedCategory("all")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border transition-all ${selectedCategory === "all"
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-card border-border hover:border-primary/50 hover:shadow-sm"
                }`}
            >
              <span className="text-sm font-medium">All</span>
              <span className="text-xs opacity-70">({agents.length})</span>
            </button>

            {/* Category Buttons */}
            {categories.map((category) => {
              const IconComponent = category.icon as LucideIcon
              const categoryAgents = agents.filter(a => a.category === category.id)
              const isSelected = selectedCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(isSelected ? "all" : category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border transition-all ${isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-sm"
                    }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                  <span className="text-xs opacity-70">({categoryAgents.length})</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "all"
                ? "All Agents"
                : `${categories.find(c => c.id === selectedCategory)?.label || selectedCategory} Agents`}
            </h2>
            <span className="text-muted-foreground text-sm">
              {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </main>
    </MarketplaceLayout>
  )
}
