"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Plus } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import React, { ReactElement } from "react"

// Helper component to handle both LucideIcon and custom icon components
function IconWrapper({ Icon }: { Icon: LucideIcon | (() => ReactElement) }) {
  const IconAny = Icon as any
  // LucideIcon components typically have a displayName or accept className
  // Custom components are just functions that return JSX
  if (IconAny?.displayName || (IconAny && typeof IconAny === 'function' && IconAny.length === 1)) {
    return <IconAny className="w-6 h-6 text-primary" />
  }
  // Render as custom component (function that returns JSX)
  return <IconAny />
}

interface ConnectorCardProps {
  id: string
  name: string
  description: string
  icon: LucideIcon | (() => ReactElement)
  category: "database" | "vector-store" | "file-storage"
  statusText: string
  documentationUrl?: string
}

export function ConnectorCard({ 
  name, 
  description, 
  icon: Icon, 
  category,
  statusText,
  documentationUrl = "#"
}: ConnectorCardProps) {
  return (
    <Card className="flex flex-col h-full rounded-xl relative bg-white border border-border hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50 overflow-hidden group">
      {/* Card Header Background - extends beneath the logo */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-br from-primary/5 to-primary/10"></div>

      {/* Icon positioned centrally on the edge between header and content */}
      <div className="relative px-5 z-10 mt-4 mb-0">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-border shadow-sm shrink-0 group-hover:bg-primary/10 transition-colors">
          <IconWrapper Icon={Icon} />
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-grow flex flex-col gap-2.5 px-5 pb-4 relative z-10 -mt-6">
        {/* Title and Add Button Row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold mb-1.5 p-0 truncate text-foreground flex-1">
            {name}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs shrink-0"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              // Placeholder for add functionality
            }}
          >
            <Plus className="w-3.5 h-3.5 mr-1" />
            Add
          </Button>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-snug">
          {description}
        </p>

        {/* Divider */}
        <div className="h-px bg-border m-0"></div>

        {/* Status and Documentation Row */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-muted-foreground">{statusText}</span>
          <Link
            href={documentationUrl}
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            View Documentation
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </Card>
  )
}

