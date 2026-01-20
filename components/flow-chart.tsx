"use client"

import React from "react"
import {
  Clock,
  Calendar,
  Mail,
  FileText,
  Rocket,
  Database,
  Search,
  Zap,
  CheckCircle,
  AlertCircle,
  Users,
  MessageSquare,
  BarChart3,
  Shield,
  Target,
  TrendingUp,
  Settings,
  Eye,
  Send,
  Save,
  type LucideIcon,
} from "lucide-react"

export interface FlowStep {
  number: number
  icon: LucideIcon
  text: string
}

export interface AgentFlow {
  trigger: string
  steps: FlowStep[]
}

interface FlowChartProps {
  flow: AgentFlow
}

// Icon mapping for common step types
const getStepIcon = (stepText: string): LucideIcon => {
  const lowerText = stepText.toLowerCase()
  if (lowerText.includes("gather") || lowerText.includes("collect") || lowerText.includes("retrieve")) {
    return Database
  }
  if (lowerText.includes("analyze") || lowerText.includes("evaluate") || lowerText.includes("assess")) {
    return BarChart3
  }
  if (lowerText.includes("generate") || lowerText.includes("create") || lowerText.includes("produce")) {
    return FileText
  }
  if (lowerText.includes("send") || lowerText.includes("deliver") || lowerText.includes("notify")) {
    return Send
  }
  if (lowerText.includes("store") || lowerText.includes("save") || lowerText.includes("record")) {
    return Save
  }
  if (lowerText.includes("check") || lowerText.includes("validate") || lowerText.includes("verify")) {
    return CheckCircle
  }
  if (lowerText.includes("route") || lowerText.includes("assign") || lowerText.includes("direct")) {
    return Target
  }
  if (lowerText.includes("search") || lowerText.includes("find") || lowerText.includes("locate")) {
    return Search
  }
  if (lowerText.includes("enrich") || lowerText.includes("enhance") || lowerText.includes("update")) {
    return TrendingUp
  }
  if (lowerText.includes("alert") || lowerText.includes("escalate") || lowerText.includes("notify")) {
    return AlertCircle
  }
  return Zap
}

export function FlowChart({ flow }: FlowChartProps) {
  return (
    <div className="w-full py-8">
      {/* Trigger Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
          <span className="text-sm font-semibold text-green-800">Trigger</span>
        </div>
      </div>

      {/* Flow Steps */}
      <div className="relative flex flex-col items-center gap-4">
        {flow.steps.map((step, index) => {
          const IconComponent = step.icon || getStepIcon(step.text)
          const isLast = index === flow.steps.length - 1

          return (
            <React.Fragment key={step.number}>
              {/* Step Box */}
              <div className="relative w-full max-w-md">
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Icon and Text */}
                  <div className="flex-1 flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pt-1">{step.text}</p>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {!isLast && (
                <div className="flex-shrink-0 w-0.5 h-8 border-l-2 border-dashed border-blue-300"></div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

