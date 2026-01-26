"use client"

import { ShieldCheckIcon } from "@heroicons/react/24/solid"
import { ChevronRight, MoveUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type GovernanceFeature = 'responsible-ai' | 'hallucination-manager' | 'guardrails'

interface ResponsibleAIModalProps {
  isOpen: boolean
  onClose: () => void
  feature?: GovernanceFeature
}

const featureHeadings: Record<GovernanceFeature, string> = {
  'responsible-ai': 'Responsible AI is available only to Custom plan users',
  'hallucination-manager': 'Hallucination Manager is available only to Custom plan users',
  'guardrails': 'Guardrails are available only to Custom plan users',
}

export default function ResponsibleAIModal({ isOpen, onClose, feature = 'responsible-ai' }: ResponsibleAIModalProps) {
  if (!isOpen) return null

  const heading = featureHeadings[feature]

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
        role="dialog"
        className="fixed left-[50%] top-[50%] z-50 grid max-h-[80vh] w-full translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto border bg-background p-6 shadow-lg duration-200 max-w-screen-sm rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <div className="grid size-10 place-items-center rounded-xl bg-indigo-50">
            <ShieldCheckIcon className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-lg font-semibold leading-none tracking-tight">
            {heading}
          </h2>
        </div>

        <div className="shrink-0 bg-border h-[1px] w-full" />

        <div>
          <p>Implement enterprise-ready governance controls to ensure your AI systems remain secure, compliant, transparent, and aligned with responsible AI standards.</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-muted-foreground underline underline-offset-4">
              <p className="text-sm">View all benefits from Custom Plan</p>
              <button
                type="button"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 py-2 px-0"
              >
                <ChevronRight className="ml-1 size-4" />
                <span className="sr-only">Toggle to see benefits of custom plan</span>
              </button>
            </div>
          </div>
        </div>

        <div>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full"
          >
            Speak to us
            <MoveUpRight className="ml-2 size-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  )
}
