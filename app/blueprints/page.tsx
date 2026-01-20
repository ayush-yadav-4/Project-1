"use client"

import { useState } from "react"
import Link from "next/link"
import { MarketplaceLayout } from "@/components/marketplace-layout"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from "lucide-react"
import { blueprints } from "@/lib/blueprints-data"
import type { Blueprint } from "@/lib/blueprints-data"

// Simple flow diagram SVG component
function FlowDiagram() {
  return (
    <svg
      viewBox="0 0 240 100"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="4" cy="4" r="0.5" fill="#d1d5db" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="240" height="100" fill="url(#grid)" />
      {/* Flow nodes - simplified rectangles */}
      <rect x="15" y="35" width="35" height="20" rx="3" fill="#6366f1" opacity="0.9" />
      <text x="32.5" y="48" fontSize="8" fill="white" textAnchor="middle" fontWeight="600">
        LLM
      </text>
      <rect x="70" y="20" width="35" height="20" rx="3" fill="#10b981" opacity="0.9" />
      <text x="87.5" y="33" fontSize="7" fill="white" textAnchor="middle" fontWeight="500">
        Coun...
      </text>
      <rect x="70" y="50" width="35" height="20" rx="3" fill="#10b981" opacity="0.9" />
      <text x="87.5" y="63" fontSize="7" fill="white" textAnchor="middle" fontWeight="500">
        Coun...
      </text>
      <rect x="125" y="35" width="35" height="20" rx="3" fill="#8b5cf6" opacity="0.9" />
      <text x="142.5" y="48" fontSize="7" fill="white" textAnchor="middle" fontWeight="500">
        Out...
      </text>
      {/* Connection lines */}
      <path
        d="M 50 45 L 70 30"
        stroke="#9ca3af"
        strokeWidth="1.2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 50 45 L 70 60"
        stroke="#9ca3af"
        strokeWidth="1.2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 105 30 L 125 45"
        stroke="#9ca3af"
        strokeWidth="1.2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 105 60 L 125 45"
        stroke="#9ca3af"
        strokeWidth="1.2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="5"
          markerHeight="5"
          refX="4"
          refY="2.5"
          orient="auto"
        >
          <polygon points="0 0, 5 2.5, 0 5" fill="#9ca3af" />
        </marker>
      </defs>
    </svg>
  )
}

function BlueprintCard({ blueprint }: { blueprint: Blueprint }) {
  return (
    <Link href={`/blueprints/${blueprint.id}`}>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-md hover:border-gray-300 transition-all">
        {/* Canvas Preview Area */}
        <div className="h-28 bg-gray-50/50 border-b border-gray-200 flex items-center justify-center p-3 rounded-t-xl">
          <FlowDiagram />
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="font-semibold text-base text-gray-900 mb-2 line-clamp-2 leading-tight">
            {blueprint.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed flex-1">
            {blueprint.description}
          </p>

          {/* Category Tag */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow rounded-full bg-black px-2 py-0.5 text-[10px] font-medium text-white">
              {blueprint.category}
            </span>
          </div>

          {/* Footer Action */}
          <div className="mt-auto pt-2 flex justify-end">
            <span className="text-xs text-gray-500 font-medium">Manager Agent</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function BlueprintsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBlueprints = blueprints.filter((blueprint) => {
    const matchesSearch =
      searchQuery === "" ||
      blueprint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blueprint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blueprint.category.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesSearch
  })

  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-8 lg:p-12">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold mb-2 text-gray-900">Blueprints</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Discover orchestration templates
          </p>

          {/* Control Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 h-9 w-full bg-white border-gray-300 rounded-md text-sm"
              />
            </div>

            {/* Dropdowns */}
            <div className="flex gap-2 flex-wrap">
              <button className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                All Types
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                All Categories
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Recently Updated
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Blueprints Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredBlueprints.map((blueprint) => (
            <BlueprintCard key={blueprint.id} blueprint={blueprint} />
          ))}
        </div>

        {filteredBlueprints.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-muted-foreground">No blueprints found matching your search.</p>
          </div>
        )}
      </main>
    </MarketplaceLayout>
  )
}
