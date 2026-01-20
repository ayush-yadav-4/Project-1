// Blueprints Data
export interface Blueprint {
  id: string
  name: string
  description: string
  useCaseTags?: string[]
  category: string
}

export const blueprints: Blueprint[] = [
  // SALES SUITE
  {
    id: "renewal-upsell-advisor",
    name: "Renewal & Upsell Advisor",
    description: "Monitors contracts, usage, and sentiment to predict renewal risk and upsell potential. Recommends plays, outreach cadences, and tailored value messaging.",
    useCaseTags: ["sales"],
    category: "Sales",
  },
  {
    id: "ai-sales-sdr",
    name: "AI Sales SDR",
    description: "Acts as a virtual sales development representative that researches prospects, personalizes outreach, and executes multi-step outbound sequences.",
    useCaseTags: ["sales", "sdr", "outreach"],
    category: "Sales",
  },
  {
    id: "ai-sales-coach",
    name: "AI Sales Coach",
    description: "Analyzes sales calls, emails, and deal progress to provide real-time coaching and post-call feedback to reps.",
    useCaseTags: ["sales", "coaching", "performance"],
    category: "Sales",
  },
  // MARKETING SUITE
  {
    id: "social-media-manager",
    name: "Social Media Manager",
    description: "Drafts and schedules posts across platforms, re-purposing content into multiple formats. Surfaces comments that need responses.",
    useCaseTags: ["social media", "content marketing", "engagement"],
    category: "Marketing",
  },
  {
    id: "seo-health-monitor",
    name: "SEO Health Monitor",
    description: "Monitors rankings, crawl issues, and content decay for critical keywords in real time. Triggers tasks to refresh content automatically.",
    useCaseTags: ["seo", "technical seo", "content health"],
    category: "Marketing",
  },
  // CUSTOMER SERVICE SUITE
  {
    id: "omni-channel-support",
    name: "Omni-Channel Support Agent",
    description: "Handles common inquiries across chat, email, voice, and messaging with consistent context. Resolves issues and escalates seamlessly.",
    useCaseTags: ["support", "customer service", "omnichannel"],
    category: "Customer Service",
  },
  // HR & TALENT SUITE
  {
    id: "onboarding-concierge",
    name: "Onboarding Concierge",
    description: "Guides new hires through paperwork, tools, and training with personalized checklists. Tracks task completion and nudges stakeholders.",
    useCaseTags: ["onboarding", "hr operations", "employee experience"],
    category: "HR & Talent",
  },
  {
    id: "performance-review-copilot",
    name: "Performance Review Co-Pilot",
    description: "Helps managers and employees write balanced, data-driven performance reviews. Surfaces goals, feedback, and outcomes automatically.",
    useCaseTags: ["performance management", "reviews", "development"],
    category: "HR & Talent",
  },
  // IT & OPERATIONS SUITE
  {
    id: "it-helpdesk-virtual",
    name: "IT Helpdesk Virtual Agent",
    description: "Transforms IT issue reporting into a conversational experience. Collects diagnostics, suggests quick fixes, and opens tickets when needed.",
    useCaseTags: ["it service desk", "incident management", "support"],
    category: "IT & Operations",
  },
  // FINANCE & BANKING SUITE
  {
    id: "expense-management-assistant",
    name: "Expense Management Assistant",
    description: "Guides employees through compliant expense submissions and approval flows. Detects policy violations and duplicate claims in real time.",
    useCaseTags: ["expense management", "finance operations", "compliance"],
    category: "Finance & Banking",
  },
  {
    id: "invoice-processing-agent",
    name: "Invoice Processing Agent",
    description: "Reads invoices, matches them with purchase orders, and flags exceptions automatically. Updates payment status seamlessly.",
    useCaseTags: ["accounts payable", "invoice processing", "finance ops"],
    category: "Finance & Banking",
  },
  // HEALTHCARE SUITE
  {
    id: "nursing-station-automation",
    name: "Nursing Station Automation",
    description: "Automates routine nursing station workflows such as vitals logging, task handoffs, and patient status updates.",
    useCaseTags: ["healthcare", "nursing", "automation"],
    category: "Healthcare",
  },
  // CROSS-INDUSTRY ANALYTICS SUITE
  {
    id: "sentiment-emotion-analyzer",
    name: "Sentiment & Emotion Analyzer",
    description: "Understands emotions at scale from text, reviews, and transcripts with nuance. Scores sentiment polarity and extracts themes.",
    useCaseTags: ["sentiment analysis", "customer insights", "analytics"],
    category: "Analytics",
  },
  {
    id: "meeting-call-summarizer",
    name: "Meeting & Call Summarizer",
    description: "Converts meetings and calls into concise, action-oriented summaries instantly. Extracts decisions, owners, risks, and next steps.",
    useCaseTags: ["meeting intelligence", "productivity", "collaboration"],
    category: "Analytics",
  },
]

export function getBlueprintById(id: string): Blueprint | undefined {
  return blueprints.find((blueprint) => blueprint.id === id)
}
