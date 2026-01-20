"use client"

import { X } from "lucide-react"
import type { BlueprintReadme } from "@/lib/blueprint-readmes"

interface ReadmeModalProps {
  blueprintName: string
  readme: BlueprintReadme
  isOpen: boolean
  onClose: () => void
}

export default function ReadmeModal({ blueprintName, readme, isOpen, onClose }: ReadmeModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {blueprintName} – Blueprint Documentation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{readme.overview}</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What Problem Does This Solve?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">The Situation</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{readme.problem.situation}</p>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">The Challenge</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{readme.problem.challenge}</p>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">What's at Stake</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{readme.problem.stake}</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How This Blueprint Works</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Key Insight</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{readme.howItWorks.keyInsight}</p>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Architecture</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{readme.howItWorks.architecture}</p>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Why This Works</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                    {readme.howItWorks.whyThisWorks.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What This Blueprint Can Do</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Core Capabilities</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                    {readme.capabilities.core.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
                {readme.capabilities.extended && readme.capabilities.extended.length > 0 && (
                  <div>
                    <h4 className="text-base font-medium text-gray-900 mb-2">Extended Capabilities</h4>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                      {readme.capabilities.extended.map((item, index) => (
                        <li key={index} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Limitations</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                    {readme.capabilities.limitations.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Getting Started</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Prerequisites</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                    {readme.gettingStarted.prerequisites.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Your First Run</h4>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mt-2">
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                      {readme.gettingStarted.firstRun}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Tips for Best Results</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                    {readme.gettingStarted.tips.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">When to Use This Blueprint</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Ideal use cases</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                    {readme.whenToUse.ideal.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">When NOT to use it</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                    {readme.whenToUse.notIdeal.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{readme.summary}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
