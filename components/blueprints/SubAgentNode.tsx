"use client"

import { memo } from "react"
import { Handle, Position, NodeProps } from "reactflow"
import { Database } from "lucide-react"

function SubAgentNode({ data }: NodeProps<{ name: string; description: string; provider: string }>) {
  return (
    <div className="bg-white border-2 border-blue-300 rounded-lg shadow-md px-4 py-3 min-w-[280px]">
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-blue-500" />
      
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
          <Database className="w-5 h-5 text-blue-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Sub Agent</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">
              Sub Agent
            </span>
          </div>
          
          <h3 className="font-semibold text-sm text-gray-900 mb-1">{data.name}</h3>
          <p className="text-xs text-gray-600 leading-relaxed">{data.description}</p>
          <p className="text-xs text-gray-500 mt-2">Provider: {data.provider}</p>
        </div>
      </div>
    </div>
  )
}

export default memo(SubAgentNode)
