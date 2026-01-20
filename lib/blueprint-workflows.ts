// Blueprint Workflow Data
export interface WorkflowNode {
  id: string
  type: 'manager' | 'subagent'
  name: string
  description: string
  provider: string
  position: { x: number; y: number }
}

export interface WorkflowEdge {
  id: string
  source: string
  target: string
  label: string
}

export interface BlueprintWorkflow {
  blueprintId: string
  nodes: WorkflowNode[]
  edges: WorkflowEdge[]
}

// Generate workflows for each agent
export const blueprintWorkflows: Record<string, BlueprintWorkflow> = {
  "renewal-upsell-advisor": {
    blueprintId: "renewal-upsell-advisor",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Renewal & Upsell Coordinator",
        description: "Orchestrates contract monitoring, risk analysis, and recommendation workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "data-collector",
        type: "subagent",
        name: "Data Collector Specialist",
        description: "Aggregates contract terms, usage metrics, and sentiment signals from multiple sources",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "risk-analyzer",
        type: "subagent",
        name: "Risk Analyzer Specialist",
        description: "Calculates renewal risk scores and identifies upsell opportunities using ML models",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "recommendation-engine",
        type: "subagent",
        name: "Recommendation Engine Specialist",
        description: "Generates personalized playbooks with outreach cadences and value messaging",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "data-collector", label: "Collect contract and usage data" },
      { id: "e2", source: "manager", target: "risk-analyzer", label: "Analyze renewal risk and upsell potential" },
      { id: "e3", source: "manager", target: "recommendation-engine", label: "Generate personalized recommendations" }
    ]
  },
  "ai-sales-sdr": {
    blueprintId: "ai-sales-sdr",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Sales SDR Orchestrator",
        description: "Coordinates prospect research, personalization, and multi-touch outreach sequences",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "prospect-researcher",
        type: "subagent",
        name: "Prospect Researcher Specialist",
        description: "Researches prospects' companies, roles, and recent activities from multiple data sources",
        provider: "OpenAI",
        position: { x: 150, y: 300 }
      },
      {
        id: "personalization-engine",
        type: "subagent",
        name: "Personalization Engine Specialist",
        description: "Creates personalized outreach messages based on research insights and intent signals",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "sequence-executor",
        type: "subagent",
        name: "Sequence Executor Specialist",
        description: "Executes multi-touch email sequences with intelligent follow-up and qualification logic",
        provider: "Google",
        position: { x: 650, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "prospect-researcher", label: "Research prospect details" },
      { id: "e2", source: "manager", target: "personalization-engine", label: "Personalize outreach messages" },
      { id: "e3", source: "manager", target: "sequence-executor", label: "Execute outreach sequence" }
    ]
  },
  "ai-sales-coach": {
    blueprintId: "ai-sales-coach",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Sales Coaching Coordinator",
        description: "Orchestrates call analysis, skill gap identification, and coaching feedback workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "call-analyzer",
        type: "subagent",
        name: "Call Analyzer Specialist",
        description: "Analyzes sales call recordings and transcripts to extract key conversation patterns",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "skill-assessor",
        type: "subagent",
        name: "Skill Assessor Specialist",
        description: "Identifies skill gaps, missed opportunities, and best practices from sales interactions",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "coaching-generator",
        type: "subagent",
        name: "Coaching Generator Specialist",
        description: "Generates personalized coaching feedback and recommended next actions for each rep",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "call-analyzer", label: "Analyze sales calls and emails" },
      { id: "e2", source: "manager", target: "skill-assessor", label: "Assess skills and identify gaps" },
      { id: "e3", source: "manager", target: "coaching-generator", label: "Generate coaching feedback" }
    ]
  },
  "social-media-manager": {
    blueprintId: "social-media-manager",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Social Media Coordinator",
        description: "Orchestrates content repurposing, scheduling, and engagement monitoring workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "content-adapter",
        type: "subagent",
        name: "Content Adapter Specialist",
        description: "Repurposes source content into platform-specific formats optimized for each social network",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "scheduler",
        type: "subagent",
        name: "Scheduler Specialist",
        description: "Determines optimal posting times and schedules content across multiple platforms",
        provider: "Google",
        position: { x: 400, y: 300 }
      },
      {
        id: "engagement-monitor",
        type: "subagent",
        name: "Engagement Monitor Specialist",
        description: "Monitors comments and engagement to surface items requiring human response",
        provider: "Anthropic",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "content-adapter", label: "Adapt content for platforms" },
      { id: "e2", source: "manager", target: "scheduler", label: "Schedule posts optimally" },
      { id: "e3", source: "manager", target: "engagement-monitor", label: "Monitor engagement" }
    ]
  },
  "seo-health-monitor": {
    blueprintId: "seo-health-monitor",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "SEO Health Coordinator",
        description: "Orchestrates ranking monitoring, issue detection, and remediation task workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "rank-monitor",
        type: "subagent",
        name: "Rank Monitor Specialist",
        description: "Continuously monitors keyword rankings and detects significant fluctuations",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "issue-detector",
        type: "subagent",
        name: "Issue Detector Specialist",
        description: "Identifies crawl errors, content decay, and technical SEO issues automatically",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "task-generator",
        type: "subagent",
        name: "Task Generator Specialist",
        description: "Creates remediation tasks for content refresh and technical fixes",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "rank-monitor", label: "Monitor keyword rankings" },
      { id: "e2", source: "manager", target: "issue-detector", label: "Detect SEO issues" },
      { id: "e3", source: "manager", target: "task-generator", label: "Generate remediation tasks" }
    ]
  },
  "omni-channel-support": {
    blueprintId: "omni-channel-support",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Support Coordinator",
        description: "Orchestrates inquiry handling, context retrieval, and resolution workflows across channels",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "intent-classifier",
        type: "subagent",
        name: "Intent Classifier Specialist",
        description: "Understands customer intent and classifies inquiries by type and urgency",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "knowledge-retriever",
        type: "subagent",
        name: "Knowledge Retriever Specialist",
        description: "Retrieves relevant information from knowledge base and customer history",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "resolution-generator",
        type: "subagent",
        name: "Resolution Generator Specialist",
        description: "Generates accurate responses and determines if escalation is needed",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "intent-classifier", label: "Classify inquiry intent" },
      { id: "e2", source: "manager", target: "knowledge-retriever", label: "Retrieve relevant knowledge" },
      { id: "e3", source: "manager", target: "resolution-generator", label: "Generate resolution" }
    ]
  },
  "onboarding-concierge": {
    blueprintId: "onboarding-concierge",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Onboarding Coordinator",
        description: "Orchestrates checklist generation, task tracking, and stakeholder coordination workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "checklist-generator",
        type: "subagent",
        name: "Checklist Generator Specialist",
        description: "Creates personalized onboarding checklists based on role, department, and location",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "task-tracker",
        type: "subagent",
        name: "Task Tracker Specialist",
        description: "Monitors task completion across paperwork, provisioning, and training modules",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "stakeholder-coordinator",
        type: "subagent",
        name: "Stakeholder Coordinator Specialist",
        description: "Identifies blockers and sends nudges to appropriate stakeholders to remove them",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "checklist-generator", label: "Generate personalized checklist" },
      { id: "e2", source: "manager", target: "task-tracker", label: "Track task completion" },
      { id: "e3", source: "manager", target: "stakeholder-coordinator", label: "Coordinate with stakeholders" }
    ]
  },
  "performance-review-copilot": {
    blueprintId: "performance-review-copilot",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Review Coordinator",
        description: "Orchestrates data collection, synthesis, and review draft generation workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "data-collector",
        type: "subagent",
        name: "Data Collector Specialist",
        description: "Surfaces goals, feedback, and outcomes from performance systems and HRIS",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "synthesis-engine",
        type: "subagent",
        name: "Synthesis Engine Specialist",
        description: "Synthesizes performance data to identify achievements and development areas",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "review-generator",
        type: "subagent",
        name: "Review Generator Specialist",
        description: "Generates balanced review drafts with recommendations and development plans",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "data-collector", label: "Collect performance data" },
      { id: "e2", source: "manager", target: "synthesis-engine", label: "Synthesize performance insights" },
      { id: "e3", source: "manager", target: "review-generator", label: "Generate review draft" }
    ]
  },
  "it-helpdesk-virtual": {
    blueprintId: "it-helpdesk-virtual",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "IT Support Coordinator",
        description: "Orchestrates issue understanding, diagnostics collection, and ticket creation workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "issue-understander",
        type: "subagent",
        name: "Issue Understander Specialist",
        description: "Engages employees in conversation to understand IT issues and collect details",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "diagnostics-collector",
        type: "subagent",
        name: "Diagnostics Collector Specialist",
        description: "Gathers diagnostic information from systems and suggests quick fixes",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "ticket-creator",
        type: "subagent",
        name: "Ticket Creator Specialist",
        description: "Creates detailed tickets with diagnostics and routes to appropriate IT teams",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "issue-understander", label: "Understand issue details" },
      { id: "e2", source: "manager", target: "diagnostics-collector", label: "Collect diagnostics" },
      { id: "e3", source: "manager", target: "ticket-creator", label: "Create support ticket" }
    ]
  },
  "expense-management-assistant": {
    blueprintId: "expense-management-assistant",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Expense Coordinator",
        description: "Orchestrates expense validation, compliance checking, and approval routing workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "receipt-processor",
        type: "subagent",
        name: "Receipt Processor Specialist",
        description: "Extracts data from receipts and matches with corporate card transactions",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "compliance-checker",
        type: "subagent",
        name: "Compliance Checker Specialist",
        description: "Validates expenses against policy and detects violations and duplicates",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "approval-router",
        type: "subagent",
        name: "Approval Router Specialist",
        description: "Routes expenses to appropriate approvers based on amount and hierarchy",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "receipt-processor", label: "Process receipt data" },
      { id: "e2", source: "manager", target: "compliance-checker", label: "Check compliance" },
      { id: "e3", source: "manager", target: "approval-router", label: "Route for approval" }
    ]
  },
  "invoice-processing-agent": {
    blueprintId: "invoice-processing-agent",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Invoice Coordinator",
        description: "Orchestrates invoice extraction, PO matching, and exception handling workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "invoice-extractor",
        type: "subagent",
        name: "Invoice Extractor Specialist",
        description: "Extracts invoice data using OCR regardless of format or layout",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "po-matcher",
        type: "subagent",
        name: "PO Matcher Specialist",
        description: "Matches invoices against purchase orders and identifies discrepancies",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "exception-handler",
        type: "subagent",
        name: "Exception Handler Specialist",
        description: "Flags exceptions and updates payment status in ERP systems",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "invoice-extractor", label: "Extract invoice data" },
      { id: "e2", source: "manager", target: "po-matcher", label: "Match with purchase orders" },
      { id: "e3", source: "manager", target: "exception-handler", label: "Handle exceptions" }
    ]
  },
  "nursing-station-automation": {
    blueprintId: "nursing-station-automation",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Nursing Station Coordinator",
        description: "Orchestrates vitals logging, task coordination, and shift handoff workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "vitals-logger",
        type: "subagent",
        name: "Vitals Logger Specialist",
        description: "Automatically logs patient vitals and updates EHR systems",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "task-coordinator",
        type: "subagent",
        name: "Task Coordinator Specialist",
        description: "Prioritizes tasks and alerts clinicians to priority patient needs",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "handoff-generator",
        type: "subagent",
        name: "Handoff Generator Specialist",
        description: "Compiles shift handoff reports with critical patient information",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "vitals-logger", label: "Log patient vitals" },
      { id: "e2", source: "manager", target: "task-coordinator", label: "Coordinate tasks" },
      { id: "e3", source: "manager", target: "handoff-generator", label: "Generate handoff reports" }
    ]
  },
  "sentiment-emotion-analyzer": {
    blueprintId: "sentiment-emotion-analyzer",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Sentiment Analysis Coordinator",
        description: "Orchestrates text ingestion, sentiment scoring, and insight extraction workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "text-ingester",
        type: "subagent",
        name: "Text Ingester Specialist",
        description: "Collects text data from reviews, surveys, transcripts, and social media",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "sentiment-scorer",
        type: "subagent",
        name: "Sentiment Scorer Specialist",
        description: "Analyzes sentiment polarity and emotional nuances using advanced NLP",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "insight-extractor",
        type: "subagent",
        name: "Insight Extractor Specialist",
        description: "Extracts themes, trends, and actionable insights from sentiment data",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "text-ingester", label: "Ingest text data" },
      { id: "e2", source: "manager", target: "sentiment-scorer", label: "Score sentiment" },
      { id: "e3", source: "manager", target: "insight-extractor", label: "Extract insights" }
    ]
  },
  "meeting-call-summarizer": {
    blueprintId: "meeting-call-summarizer",
    nodes: [
      {
        id: "manager",
        type: "manager",
        name: "Meeting Coordinator",
        description: "Orchestrates transcript ingestion, key extraction, and summary generation workflows",
        provider: "Google",
        position: { x: 400, y: 100 }
      },
      {
        id: "transcript-ingester",
        type: "subagent",
        name: "Transcript Ingester Specialist",
        description: "Collects audio or transcripts from meeting platforms and call recordings",
        provider: "OpenAI",
        position: { x: 200, y: 300 }
      },
      {
        id: "key-extractor",
        type: "subagent",
        name: "Key Extractor Specialist",
        description: "Extracts decisions, action items, risks, and next steps from conversations",
        provider: "Anthropic",
        position: { x: 400, y: 300 }
      },
      {
        id: "summary-generator",
        type: "subagent",
        name: "Summary Generator Specialist",
        description: "Generates concise, action-oriented summaries and creates tasks in project tools",
        provider: "Google",
        position: { x: 600, y: 300 }
      }
    ],
    edges: [
      { id: "e1", source: "manager", target: "transcript-ingester", label: "Ingest meeting transcripts" },
      { id: "e2", source: "manager", target: "key-extractor", label: "Extract key information" },
      { id: "e3", source: "manager", target: "summary-generator", label: "Generate summary" }
    ]
  }
}

export function getWorkflowByBlueprintId(blueprintId: string): BlueprintWorkflow | undefined {
  return blueprintWorkflows[blueprintId]
}
