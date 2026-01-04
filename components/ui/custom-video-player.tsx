"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

interface CustomVideoPlayerProps {
  videoUrl?: string
  agentName: string
}

export function CustomVideoPlayer({ videoUrl, agentName }: CustomVideoPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Video Player Box */}
      <div
        onClick={() => setIsExpanded(true)}
        className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-900 dark:bg-slate-950 cursor-pointer group mb-6 hover:shadow-lg transition-shadow"
      >
        <video className="w-full h-full object-cover" poster="/agent-demo-video.jpg">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden bg-slate-900">
            <video className="w-full h-full object-cover" controls autoPlay poster="/agent-demo-video.jpg">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
