"use client"

import { useState } from "react"
import { useReactFlow } from "reactflow"
import { Hand, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"

interface CanvasControlsProps {
  panMode: boolean
  onPanModeToggle: () => void
}

export default function CanvasControls({ panMode, onPanModeToggle }: CanvasControlsProps) {
  const { zoomIn, zoomOut, fitView } = useReactFlow()

  const handleZoomIn = () => {
    zoomIn({ duration: 200 })
  }

  const handleZoomOut = () => {
    zoomOut({ duration: 200 })
  }

  const handleResetView = () => {
    fitView({ padding: 0.2, duration: 400 })
  }

  return (
    <div className="absolute top-4 right-4 z-10 flex flex-col gap-1 bg-white border border-gray-200 rounded-lg shadow-sm p-1">
      <button
        onClick={onPanModeToggle}
        className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
          panMode
            ? "bg-blue-50 text-blue-600 border border-blue-200"
            : "text-gray-600 hover:bg-gray-50"
        }`}
        title={panMode ? "Disable pan mode" : "Enable pan mode"}
      >
        <Hand className="w-4 h-4" />
      </button>
      
      <div className="h-px bg-gray-200 my-0.5" />
      
      <button
        onClick={handleZoomIn}
        className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-50 transition-colors"
        title="Zoom in"
      >
        <ZoomIn className="w-4 h-4" />
      </button>
      
      <button
        onClick={handleZoomOut}
        className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-50 transition-colors"
        title="Zoom out"
      >
        <ZoomOut className="w-4 h-4" />
      </button>
      
      <div className="h-px bg-gray-200 my-0.5" />
      
      <button
        onClick={handleResetView}
        className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-50 transition-colors"
        title="Reset view"
      >
        <RotateCcw className="w-4 h-4" />
      </button>
    </div>
  )
}
