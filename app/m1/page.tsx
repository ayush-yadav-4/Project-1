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
  Search,
  RefreshCw as RefreshIcon,
  ThumbsUp,
  ChevronDown,
  Database,
  Network,
  Calendar,
  CheckCircle,
  Settings,
  ShoppingBag,
  Heart,
  Sparkles,
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
import { allAgents, getIntegrationIcons, suites } from "@/lib/agents-data"
import type { Agent } from "@/lib/agents-data"
import { AGENT_BRAND_INTEGRATIONS } from "@/lib/agent-brand-integrations"

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

// Create categories from suites
const categories = suites.map(suite => ({
  id: suite.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  label: suite,
  icon: suiteIcons[suite] || FileText,
}))

// Add "All" category
categories.unshift({ id: "all", label: "All", icon: FileText })

// Map agents to display format with icons
const agents = allAgents.map((agent, index) => {
  // Assign icons based on suite
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
    category: agent.suite.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    icon: iconMap[agent.suite] || InvoiceIcon,
    author: agent.author || "Team",
    likes: agent.likes || 100 + (index % 100),
  }
})

export default function M1Page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.suite.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || agent.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Convert brand name to logo file path
  const getBrandLogoPath = (brandName: string): string | null => {
    // Special mappings for brands with different file names and extensions
    const specialMappings: Record<string, { name: string; ext: string }> = {
      "Azure AD": { name: "azure-active-directory", ext: ".svg" },
      "Active Directory": { name: "azure-active-directory", ext: ".svg" },
      "Salesforce": { name: "salesforce (1)", ext: ".png" },
      "Salesforce Service": { name: "salesforce (1)", ext: ".png" },
      "Zendesk Guide": { name: "zendesk guide", ext: ".png" },
      "Zendesk": { name: "zendesk", ext: ".png" },
      "Slack Communities": { name: "slack communities", ext: ".png" },
      "Slack": { name: "slack", ext: ".png" },
      "Google Search Console": { name: "google_search_console", ext: ".png" },
      "Google Search API": { name: "Google Search API", ext: ".png" },
      "Google Drive": { name: "google drive", ext: ".png" },
      "Google Sheets": { name: "google-sheets", ext: ".png" },
      "Google Ads": { name: "google-ads", ext: ".png" },
      "Google Calendar": { name: "google-calendar", ext: ".png" },
      "Microsoft Teams": { name: "microsoft teams", ext: ".png" },
      "LinkedIn Ads": { name: "linkedin ads", ext: ".png" },
      "Meta Ads": { name: "meta ads", ext: ".png" },
      "Jira Service Management": { name: "Jira-Service-Management_icon", ext: ".png" },
      "Jira": { name: "Jira_icon", ext: ".png" },
      "GitHub Actions": { name: "GitHub Actions", ext: ".png" },
      "GitHub": { name: "GitHub", ext: ".png" },
      "GitLab": { name: "GitLab", ext: ".png" },
      "Confluence": { name: "Confluence_icon", ext: ".png" },
      "Outlook": { name: "outlook", ext: ".jpeg" },
      "SharePoint": { name: "sharepoint", ext: ".svg" },
      "HubSpot": { name: "hubspot", ext: ".png" },
      "Freshdesk": { name: "freshdesk", ext: ".png" },
      "ServiceNow": { name: "ServiceNow", ext: ".png" },
      "Shopify": { name: "shopify", ext: ".png" },
      "BigCommerce": { name: "bigcommerce", ext: ".png" },
      "Stripe": { name: "stripe", ext: ".png" },
      "Chargebee": { name: "chargebee", ext: ".png" },
      "Recurly": { name: "recurly", ext: ".png" },
      "Notion": { name: "notion", ext: ".png" },
      "Gmail": { name: "gmail", ext: ".png" },
      "Hootsuite": { name: "Hootsuite", ext: ".png" },
      "Buffer": { name: "Buffer", ext: ".png" },
      "Eventbrite": { name: "Eventbrite", ext: ".png" },
      "SurveyMonkey": { name: "surveymonkey", ext: ".png" },
      "Typeform": { name: "typeform", ext: ".png" },
      "WhatsApp": { name: "whatsapp", ext: ".png" },
      "Discourse": { name: "discourse", ext: ".png" },
      "Khoros": { name: "khoros", ext: ".png" },
      "Reddit": { name: "reddit", ext: ".png" },
      "BambooHR": { name: "BambooHR", ext: ".png" },
      "Workday": { name: "Workday", ext: ".png" },
      "Okta": { name: "okta", ext: ".png" },
      "SAP Concur": { name: "sap concur", ext: ".png" },
      "Expensify": { name: "expensify", ext: ".png" },
      "Jenkins": { name: "jenkins", ext: ".png" },
      "Kubernetes": { name: "Kubernetes", ext: ".png" },
      "Excel": { name: "excel", ext: ".png" },
      "Discord": { name: "discord", ext: ".png" },
      "Ahrefs": { name: "Ahrefs", ext: ".png" },
      "SEMrush": { name: "SEMrush", ext: ".png" },
      "Outreach": { name: "outreach", ext: ".png" },
      "Salesloft": { name: "salesloft", ext: ".png" },
    }

    // Check special mappings first
    if (specialMappings[brandName]) {
      const mapping = specialMappings[brandName]
      return `/integration-logos/${mapping.name}${mapping.ext}`
    }

    // Default: convert to lowercase, replace spaces with hyphens
    const normalized = brandName.toLowerCase().replace(/\s+/g, "-")
    return `/integration-logos/${normalized}.png`
  }

  // Get brand logos for an agent
  const getBrandLogos = (agentName: string): Array<{ logoPath: string; brandName: string } | { label: string; isText: true }> => {
    const integrations = AGENT_BRAND_INTEGRATIONS[agentName]
    if (!integrations || integrations.length === 0) {
      return []
    }

    const logos: Array<{ logoPath: string; brandName: string } | { label: string; isText: true }> = []
    const maxVisible = 3
    const visibleCount = Math.min(integrations.length, maxVisible)

    // Add visible logos
    for (let i = 0; i < visibleCount; i++) {
      const brandName = integrations[i]
      const logoPath = getBrandLogoPath(brandName)
      if (logoPath) {
        logos.push({ logoPath, brandName })
      }
    }

    // Add "+N" indicator if there are more integrations
    if (integrations.length > maxVisible) {
      logos.push({ label: `+${integrations.length - maxVisible}`, isText: true })
    }

    return logos
  }

  // Generate integration icons for each agent (fallback for agents without brand mappings)
  const getIntegrationIcons = (agentId: number): Array<{ bg: string; icon?: LucideIcon; label: string; isText?: boolean }> => {
    // Generate 3-4 integration icons per agent based on ID
    const iconSets: Array<Array<{ bg: string; icon?: LucideIcon; label: string; isText?: boolean }>> = [
      [
        { bg: "bg-orange-500", icon: Target, label: "HS" },
        { bg: "bg-green-500", icon: Headphones, label: "" },
        { bg: "bg-black", icon: Zap, label: "" },
        { bg: "bg-gray-400", label: "+1", isText: true },
      ],
      [
        { bg: "bg-blue-500", icon: FileText, label: "" },
        { bg: "bg-purple-500", icon: Briefcase, label: "" },
        { bg: "bg-red-500", icon: Zap, label: "" },
      ],
      [
        { bg: "bg-orange-500", icon: Target, label: "HS" },
        { bg: "bg-indigo-500", icon: Shield, label: "" },
        { bg: "bg-pink-500", icon: MessageSquare, label: "" },
        { bg: "bg-gray-400", label: "+2", isText: true },
      ],
      [
        { bg: "bg-green-500", icon: TrendingUp, label: "" },
        { bg: "bg-blue-500", icon: BarChart3, label: "" },
        { bg: "bg-purple-500", icon: MessageSquare, label: "" },
      ],
      [
        { bg: "bg-orange-500", icon: Server, label: "" },
        { bg: "bg-teal-500", icon: Users, label: "" },
        { bg: "bg-yellow-500", icon: CreditCard, label: "" },
      ],
      [
        { bg: "bg-blue-500", icon: Server, label: "" },
        { bg: "bg-green-500", icon: Database, label: "" },
        { bg: "bg-purple-500", icon: Network, label: "" },
      ],
      [
        { bg: "bg-orange-500", icon: Target, label: "HS" },
        { bg: "bg-pink-500", icon: TrendingUp, label: "" },
        { bg: "bg-blue-500", icon: BarChart3, label: "" },
      ],
      [
        { bg: "bg-orange-500", icon: Target, label: "HS" },
        { bg: "bg-blue-500", icon: Briefcase, label: "" },
        { bg: "bg-green-500", icon: MessageSquare, label: "" },
      ],
      [
        { bg: "bg-indigo-500", icon: Briefcase, label: "" },
        { bg: "bg-blue-500", icon: MessageSquare, label: "" },
        { bg: "bg-green-500", icon: Target, label: "" },
      ],
      [
        { bg: "bg-blue-500", icon: FileText, label: "" },
        { bg: "bg-purple-500", icon: Calendar, label: "" },
        { bg: "bg-green-500", icon: Users, label: "" },
      ],
      [
        { bg: "bg-pink-500", icon: MessageSquare, label: "" },
        { bg: "bg-blue-500", icon: Target, label: "" },
        { bg: "bg-orange-500", icon: TrendingUp, label: "" },
      ],
      [
        { bg: "bg-orange-500", icon: Target, label: "HS" },
        { bg: "bg-blue-500", icon: BarChart3, label: "" },
        { bg: "bg-green-500", icon: MessageSquare, label: "" },
      ],
      [
        { bg: "bg-cyan-500", icon: Phone, label: "" },
        { bg: "bg-blue-500", icon: Headphones, label: "" },
        { bg: "bg-green-500", icon: MessageSquare, label: "" },
      ],
      [
        { bg: "bg-pink-500", icon: MessageSquare, label: "" },
        { bg: "bg-purple-500", icon: Shield, label: "" },
        { bg: "bg-blue-500", icon: Target, label: "" },
      ],
      [
        { bg: "bg-purple-500", icon: Shield, label: "" },
        { bg: "bg-blue-500", icon: Users, label: "" },
        { bg: "bg-green-500", icon: FileText, label: "" },
      ],
      [
        { bg: "bg-green-500", icon: TrendingUp, label: "" },
        { bg: "bg-blue-500", icon: BarChart3, label: "" },
        { bg: "bg-purple-500", icon: MessageSquare, label: "" },
      ],
      [
        { bg: "bg-lime-500", icon: Wrench, label: "" },
        { bg: "bg-blue-500", icon: FileText, label: "" },
        { bg: "bg-green-500", icon: Settings, label: "" },
      ],
      [
        { bg: "bg-blue-500", icon: FileText, label: "" },
        { bg: "bg-purple-500", icon: Wrench, label: "" },
        { bg: "bg-green-500", icon: CheckCircle, label: "" },
      ],
    ]
    return iconSets[agentId % iconSets.length] || iconSets[0]
  }

  const AgentCard = ({ agent }: { agent: typeof agents[0] }) => {
    const Icon = agent.icon
    const [likes, setLikes] = useState(agent.likes)
    const [isLiked, setIsLiked] = useState(false)
    
    // Check if agent has brand integrations
    const brandLogos = getBrandLogos(agent.name)
    const hasBrandLogos = brandLogos.length > 0
    
    // Fallback to placeholder icons if no brand logos
    const agentIdNum = agent.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const integrationIcons = hasBrandLogos ? [] : getIntegrationIcons(agentIdNum)

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
                {hasBrandLogos ? (
                  <>
                    {brandLogos.map((item, idx) => {
                      if ('isText' in item && item.isText) {
                        return (
                          <div
                            key={idx}
                            className="w-8 h-8 rounded-md bg-gray-400 flex items-center justify-center shadow-sm shrink-0"
                          >
                            <span className="text-white text-xs font-semibold">{item.label}</span>
                          </div>
                        )
                      } else if ('logoPath' in item) {
                        return (
                          <div
                            key={idx}
                            className="w-8 h-8 rounded-md shadow-sm shrink-0 overflow-hidden"
                          >
                            <img
                              src={item.logoPath}
                              alt={item.brandName}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Silently hide broken images
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          </div>
                        )
                      }
                      return null
                    })}
                  </>
                ) : (
                  <>
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
                  </>
                )}
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
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs transition-colors shadow-sm ${isLiked
                    ? "text-blue-600 bg-blue-50"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
      <main className="p-6 md:p-12">
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
              {categories.filter(cat => cat.id !== "all").map((cat) => (
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
            {categories.filter(cat => cat.id !== "all").map((category) => {
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
