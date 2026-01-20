"use client"

import { useState } from "react"
import { MarketplaceLayout } from "@/components/marketplace-layout"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { modelProviders } from "@/lib/model-providers-data"
import type { ModelProvider } from "@/lib/model-providers-data"

// Helper function to get provider icon
function getProviderIcon(provider: ModelProvider) {
  if (provider.logoImage) {
    return (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white p-1">
        <img
          src={provider.logoImage}
          alt={provider.name}
          className="w-full h-full object-contain"
        />
      </div>
    )
  }
  
  return (
    <div className={`w-10 h-10 rounded-lg ${provider.iconColor} flex items-center justify-center text-white font-semibold text-base flex-shrink-0`}>
      {provider.iconLetter}
    </div>
  )
}

export default function ModelProvidersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProviders = modelProviders.filter((provider) => {
    const matchesSearch =
      searchQuery === "" ||
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.models?.some((model) => model.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesSearch
  })

  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-8 lg:p-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2 text-gray-900">Model Providers</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Configure LLM model providers and manage their API settings.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 h-9 w-full bg-white border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        {/* Model Provider Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 transition-all duration-200 cursor-pointer h-full flex flex-col"
            >
              {/* Icon and Content */}
              <div className="flex items-start gap-3 mb-3">
                {getProviderIcon(provider)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-semibold text-base text-gray-900 leading-tight">{provider.name}</h3>
                    {provider.status === "coming-soon" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 whitespace-nowrap shrink-0">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {provider.description}
                  </p>
                </div>
              </div>

              {/* Model Tags */}
              {provider.models && provider.models.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {provider.models.map((model, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-normal bg-gray-100 text-gray-700"
                    >
                      {model}
                    </span>
                  ))}
                  {provider.additionalModelsCount && provider.additionalModelsCount > 0 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-normal bg-gray-100 text-gray-700">
                      +{provider.additionalModelsCount}
                    </span>
                  )}
                </div>
              )}

              {/* Action Button */}
              <div className="mt-auto pt-3">
                {provider.status === "available" ? (
                  <button 
                    className="w-full font-medium text-sm py-2 px-4 rounded-md transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#F2F2F2', color: '#171717' }}
                  >
                    Upgrade
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-muted-foreground">No model providers found matching your search.</p>
          </div>
        )}
      </main>
    </MarketplaceLayout>
  )
}
