"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Plus, Eye, Share2, Copy } from "lucide-react"
import { MarketplaceLayout } from "@/components/marketplace-layout"
import { Button } from "@/components/ui/button"
import { getBlueprintById } from "@/lib/blueprints-data"
import { getWorkflowByBlueprintId } from "@/lib/blueprint-workflows"
import { getReadmeByBlueprintId } from "@/lib/blueprint-readmes"
import BlueprintCanvas from "@/components/blueprints/BlueprintCanvas"
import ReadmeModal from "@/components/blueprints/ReadmeModal"

export default function BlueprintDetailPage() {
  const params = useParams()
  const blueprintId = params.id as string
  const [isReadmeOpen, setIsReadmeOpen] = useState(false)

  const blueprint = getBlueprintById(blueprintId)
  const workflow = getWorkflowByBlueprintId(blueprintId)
  const readme = getReadmeByBlueprintId(blueprintId)

  if (!blueprint || !workflow) {
    return (
      <MarketplaceLayout>
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blueprint not found</h1>
            <p className="text-sm text-muted-foreground">The blueprint you're looking for doesn't exist.</p>
          </div>
        </div>
      </MarketplaceLayout>
    )
  }

  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-8 lg:p-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2 text-gray-900">{blueprint.name}</h1>
          <p className="text-base text-muted-foreground mb-6">{blueprint.description}</p>

          <div className="flex gap-3 flex-wrap">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0">
              <Plus className="w-4 h-4" />
              Create Agent
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsReadmeOpen(true)}
              className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Eye className="w-4 h-4" />
              README
            </Button>
            <Button
              variant="outline"
              className="bg-white border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button
              variant="outline"
              className="bg-white border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <Copy className="w-4 h-4" />
              Clone Blueprint
            </Button>
          </div>
        </div>

        <BlueprintCanvas workflow={workflow} />

        {readme && (
          <ReadmeModal
            blueprintName={blueprint.name}
            readme={readme}
            isOpen={isReadmeOpen}
            onClose={() => setIsReadmeOpen(false)}
          />
        )}
      </main>
    </MarketplaceLayout>
  )
}
