"use client"

import { useState } from "react"
import Link from "next/link"
import { MarketplaceLayout } from "@/components/marketplace-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  ExternalLink,
  ArrowLeft,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { integrations, categories, getIntegrationsByCategory } from "@/lib/integrations-data"
import type { Integration } from "@/lib/integrations-data"

type SortOption = "recommended" | "name-asc" | "name-desc" | "popular"

// Mapping of integration IDs/names to logo paths
const INTEGRATION_LOGOS: Record<string, string> = {
  openai: "/openai-logo.png",
  anthropic: "/anthropic-logo.png",
  "aws bedrock": "/aws-bedrock-logo.png",
  "amazon bedrock": "/aws-bedrock-logo.png",
  google: "/google-logo.png",
  "google drive": "/googledrive-logo.png",
  groq: "/groq-logo.png",
  "hugging face": "/hf-logo.png",
  huggingface: "/hf-logo.png",
  nvidia: "/nvidia-logo.png",
  elevenlabs: "/elevenlabs-logo.png",
  deepgram: "/deepgram-logo.webp",
  ibm: "/ibm-logo.png",
  "ibm watsonx": "/ibm-logo.png",
  watsonx: "/ibm-logo.png",
  chromadb: "/chromadb-logo.png",
  pinecone: "/pinecone-logo.png",
  weaviate: "/weaviate-logo.png",
  qdrant: "/qdrant-logo.png",
  "pg-vector": "/pg_vector-logo.png",
  "pg vector": "/pg_vector-logo.png",
  postgresvector: "/pg_vector-logo.png",
  milvus: "/milvus-logo.png",
  postgresql: "/postgres-logo.png",
  postgres: "/postgres-logo.png",
  mongodb: "/mongodb-logo.png",
  neo4j: "/neo4j-logo.png",
  dropbox: "/dropbox-logo.png",
}

// Helper function to get logo path for an integration
function getIntegrationLogoPath(integration: Integration): string | null {
  const id = integration.id.toLowerCase()
  const name = integration.name.toLowerCase()
  
  // Try ID first
  if (INTEGRATION_LOGOS[id]) {
    return INTEGRATION_LOGOS[id]
  }
  
  // Try name
  if (INTEGRATION_LOGOS[name]) {
    return INTEGRATION_LOGOS[name]
  }
  
  // Try partial matches for common variations
  for (const [key, path] of Object.entries(INTEGRATION_LOGOS)) {
    if (id.includes(key) || name.includes(key)) {
      return path
    }
  }
  
  return null
}

// Helper function to get icon component for integration
function getIntegrationIcon(integration: Integration) {
  // First check if integration has a logo field
  if (integration.logo) {
    return (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white shadow-md">
        <img
          src={integration.logo}
          alt={integration.name}
          className="w-full h-full object-contain block"
        />
      </div>
    )
  }
  
  // Fallback to legacy logo mapping
  const logoPath = getIntegrationLogoPath(integration)
  
  if (logoPath) {
    return (
      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white shadow-md">
        <img
          src={logoPath}
          alt={integration.name}
          className="w-full h-full object-contain block"
        />
      </div>
    )
  }
  
  // Fallback to letter-based icon
  const firstLetter = integration.name.charAt(0).toUpperCase()
  const color = integration.iconColor || "bg-gray-600"
  
  return (
    <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white font-semibold text-lg shadow-md`}>
      {firstLetter}
    </div>
  )
}

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([])
  const [selectedFunction, setSelectedFunction] = useState<string[]>([])
  const [selectedUseCase, setSelectedUseCase] = useState<string[]>([])
  const [sortOption, setSortOption] = useState<SortOption>("recommended")
  const [useCaseSearchQuery, setUseCaseSearchQuery] = useState("")

  // Filter integrations
  let filteredIntegrations = integrations.filter((integration) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.capabilities.some((cap) => cap.toLowerCase().includes(searchQuery.toLowerCase()))
    
    // Category filter
    const matchesCategory = selectedCategory === "all" || integration.category === selectedCategory
    
    // Industry filter
    const matchesIndustry =
      selectedIndustry.length === 0 ||
      (integration.industries && integration.industries.some((ind) => selectedIndustry.includes(ind)))
    
    // Function filter
    const matchesFunction =
      selectedFunction.length === 0 ||
      (integration.functions && integration.functions.some((func) => selectedFunction.includes(func)))
    
    // Use Case filter
    const matchesUseCase =
      selectedUseCase.length === 0 ||
      (integration.useCases && integration.useCases.some((uc) => selectedUseCase.includes(uc)))
    
    return matchesSearch && matchesCategory && matchesIndustry && matchesFunction && matchesUseCase
  })

  // Sort integrations
  filteredIntegrations = [...filteredIntegrations].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      case "popular":
        // Sort by number of capabilities as a proxy for popularity
        return b.capabilities.length - a.capabilities.length
      case "recommended":
      default:
        // Default: keep original order (could be enhanced with actual recommendation logic)
        return 0
    }
  })

  const categoryCounts: Record<string, number> = {
    all: integrations.length,
  }
  
  categories.forEach((cat) => {
    categoryCounts[cat] = getIntegrationsByCategory(cat).length
  })

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "E-Commerce",
    "Education",
    "Transportation & Logistics",
    "Media & Entertainment",
    "Professional Services",
    "Hospitality & Tourism",
    "Telecommunications",
    "Government & Public Sector",
  ]

  const functions = [
    "Customer Support",
    "Sales",
    "Marketing",
    "HR",
    "IT",
    "Finance",
    "Operations",
  ]

  const useCases = [
    "Team Development",
    "Team Performance",
    "Team Productivity",
    "Technical Communication",
    "Ticket Management",
    "Time Optimization",
    "UX Design",
    "User Survey",
    "Website Management",
  ]

  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/marketplace" className="hover:text-primary transition-colors">
              ← Back
            </Link>
            <span>/</span>
            <Link href="/marketplace" className="hover:text-primary transition-colors">
              Marketplace
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Integrations</span>
          </div>

          {/* Page Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-4xl font-bold mb-2">3rd-party Integrations</h1>
              <p className="text-muted-foreground text-base">
                {filteredIntegrations.length} Integration{filteredIntegrations.length !== 1 ? "s" : ""} Found
              </p>
            </div>
            <Button variant="ghost" size="sm" className="gap-2">
              Login
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-4 space-y-6">
              {/* Industry Filter */}
              <div>
                <h3 className="font-semibold text-sm mb-3">Industry</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {industries.map((industry) => (
                    <label key={industry} className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300"
                        checked={selectedIndustry.includes(industry)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedIndustry([...selectedIndustry, industry])
                          } else {
                            setSelectedIndustry(selectedIndustry.filter((i) => i !== industry))
                          }
                        }}
                      />
                      <span className="text-sm">{industry}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Function Filter */}
              <div>
                <h3 className="font-semibold text-sm mb-3">Function</h3>
                <div className="space-y-2">
                  {functions.map((func) => (
                    <label key={func} className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300"
                        checked={selectedFunction.includes(func)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFunction([...selectedFunction, func])
                          } else {
                            setSelectedFunction(selectedFunction.filter((f) => f !== func))
                          }
                        }}
                      />
                      <span className="text-sm">{func}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Use Case Filter */}
              <div>
                <h3 className="font-semibold text-sm mb-3">Use Case</h3>
                <Input
                  type="text"
                  placeholder="Search Use Cases..."
                  className="mb-3 text-sm"
                  value={useCaseSearchQuery}
                  onChange={(e) => setUseCaseSearchQuery(e.target.value)}
                />
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {useCases
                    .filter((useCase) =>
                      useCaseSearchQuery === "" ||
                      useCase.toLowerCase().includes(useCaseSearchQuery.toLowerCase())
                    )
                    .map((useCase) => (
                      <label key={useCase} className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300"
                          checked={selectedUseCase.includes(useCase)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedUseCase([...selectedUseCase, useCase])
                            } else {
                              setSelectedUseCase(selectedUseCase.filter((u) => u !== useCase))
                            }
                          }}
                        />
                        <span className="text-sm">{useCase}</span>
                      </label>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Type and press Enter to search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full bg-background"
                />
              </div>
              <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Recommended" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Integration Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredIntegrations.map((integration) => (
                <Link key={integration.id} href={`/marketplace/tools/${integration.id}`}>
                  <Card className="p-4 hover:shadow-lg transition-all cursor-pointer border hover:border-primary/50 h-full">
                    <div className="flex items-start gap-4">
                      {getIntegrationIcon(integration)}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-1">{integration.name}</h3>
                        <p className="text-sm text-muted-foreground">by {integration.provider}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredIntegrations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No integrations found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </MarketplaceLayout>
  )
}
