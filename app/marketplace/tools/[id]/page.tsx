"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { MarketplaceLayout } from "@/components/marketplace-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
import { getIntegrationById } from "@/lib/integrations-data"
import type { Integration } from "@/lib/integrations-data"

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
      <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white shadow-lg">
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
      <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white shadow-lg">
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
    <div className={`w-16 h-16 rounded-lg ${color} flex items-center justify-center text-white font-semibold text-2xl shadow-lg`}>
      {firstLetter}
    </div>
  )
}

export default function IntegrationDetailPage() {
  const params = useParams()
  const integrationId = params.id as string
  
  const integration = getIntegrationById(integrationId)

  if (!integration) {
    return (
      <MarketplaceLayout>
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Integration not found</h1>
            <Link href="/marketplace/tools">
              <Button>Back to Integrations</Button>
            </Link>
          </div>
        </div>
      </MarketplaceLayout>
    )
  }

  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-12 max-w-6xl mx-auto">
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
            <Link href="/marketplace/tools" className="hover:text-primary transition-colors">
              Integrations
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{integration.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="flex items-start gap-4">
              {getIntegrationIcon(integration)}
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{integration.name}</h1>
                <p className="text-lg text-muted-foreground mb-1">Integration</p>
                <p className="text-base text-muted-foreground">{integration.description}</p>
              </div>
            </div>

            {/* Capabilities Section */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">By authorizing this integration you can:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {integration.capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="text-primary text-sm hover:underline">
                  Read less
                </button>
              </div>
            </Card>
          </div>

          {/* Right Column - Integration Visual */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2">
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Connected Integrations</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This integration connects with other tools in your ecosystem
                    </p>
                  </div>
                  
                  {/* Visual representation of connected tools */}
                  <div className="relative h-64 bg-white/50 rounded-lg p-4 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2">
                      {/* Sample connected tool icons */}
                      {["Salesforce", "Slack", "Gmail", "HubSpot", "Zendesk", "Stripe"].slice(0, 6).map((tool, idx) => (
                        <div
                          key={idx}
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-semibold shadow-md"
                        >
                          {tool.charAt(0)}
                        </div>
                      ))}
                    </div>
                    {/* Connection lines visualization */}
                    <div className="absolute inset-0 pointer-events-none">
                      <svg className="w-full h-full opacity-20">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <line
                            key={i}
                            x1="50%"
                            y1="50%"
                            x2={`${20 + (i % 3) * 30}%`}
                            y2={`${20 + Math.floor(i / 3) * 30}%`}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                        ))}
                      </svg>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Authorize Integration
                  </Button>
                  
                  <div className="text-center">
                    <Link href="/marketplace/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      View all integrations
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </MarketplaceLayout>
  )
}
