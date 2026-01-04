"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Shield,
  RefreshCw,
  CreditCard,
  Target,
  TrendingUp,
  Briefcase,
  HelpCircle,
  Wrench,
  Server,
  Phone,
  MessageSquare,
  ArrowLeft,
} from "lucide-react"
import { useParams } from "next/navigation"
import { MarketplaceLayout } from "@/components/marketplace-layout"
import { CustomVideoPlayer } from "@/components/ui/custom-video-player"
import { HoverButton } from "@/components/ui/hover-glow-button"

const allAgents = [
  {
    id: 1,
    name: "Invoice Processing Agent",
    description: "Automates invoice verification and processing",
    detailedDescription:
      "Our Invoice Processing Agent revolutionizes how organizations handle accounts payable workflows. It intelligently extracts data from invoices using advanced OCR and AI, validates information against purchase orders and contracts, automatically routes invoices to appropriate departments based on predefined rules, and provides real-time tracking of invoice status. The agent learns from your organization's specific processes and adapts to handle exceptions intelligently, reducing manual intervention and accelerating the entire payment cycle.",
    problems: [
      "Manual invoice processing requires significant data entry, leading to high error rates and rework",
      "Creates bottlenecks in accounts payable workflows, delaying payments and straining vendor relationships",
      "Difficult to track invoice status across departments, causing confusion and duplicate processing",
      "Compliance and audit requirements demand detailed records that are time-consuming to maintain manually",
    ],
    benefits: [
      "Reduces processing time by 80%, enabling faster payment cycles and improved cash flow management",
      "Minimizes errors and improves accuracy through automated validation and verification processes",
      "Improves cash flow visibility with real-time tracking and automated payment scheduling",
      "Frees up staff for strategic tasks like vendor relationship management and process optimization",
    ],
    icon: FileText,
    category: "finance",
    videoUrl: "/videos/Invoice_Agent.mp4",
  },
  {
    id: 2,
    name: "HR Recruitment Agent",
    description: "Screens resumes and identifies top candidates",
    detailedDescription:
      "The HR Recruitment Agent automatically screens resumes against job requirements, identifies qualified candidates, conducts initial assessments through conversational interviews, and ranks candidates based on fit and qualifications. It eliminates unconscious bias through objective evaluation criteria and maintains detailed candidate profiles for future reference.",
    problems: [
      "Recruiters spend hours screening resumes manually, delaying the hiring process significantly",
      "Leads to delays in hiring process, causing top candidates to accept other offers",
      "Risk of losing top candidates to competitors due to slow response times",
      "Unconscious bias in manual screening can lead to missed qualified candidates",
    ],
    benefits: [
      "Reduces time-to-hire by 50% through automated screening and initial assessment",
      "Improves candidate quality by objectively evaluating qualifications and fit",
      "Eliminates unconscious bias through standardized evaluation criteria",
      "Accelerates recruitment pipeline and enables faster hiring decisions",
    ],
    icon: Briefcase,
    category: "hr",
    videoUrl: "/videos/HR_Bot_Agent.mp4",
  },
  {
    id: 3,
    name: "Legal Innovation Agent",
    description: "Streamlines legal research and document preparation",
    detailedDescription:
      "The Legal Innovation Agent automates legal research and document preparation by analyzing case law, statutes, and regulations, generating legal briefs and memos, and providing insights on legal implications. It learns from your organization's specific legal requirements and adapts to handle exceptions intelligently, reducing manual intervention and accelerating the legal process.",
    problems: [
      "Manual legal research is time-consuming and error-prone, leading to delayed decision-making",
      "Legal documents require significant manual effort to draft and review, leading to errors and delays",
      "Legal research is often incomplete or outdated, leading to missed critical information",
      "Legal document preparation is time-consuming and requires specialized knowledge",
    ],
    benefits: [
      "Accelerates legal research by 75% through AI-powered case law and statute analysis",
      "Reduces document preparation time significantly with intelligent templates and suggestions",
      "Improves accuracy and compliance through automated verification against current regulations",
      "Enables legal teams to focus on strategic counsel rather than routine document work",
    ],
    icon: RefreshCw,
    category: "legal",
    videoUrl: "/videos/Legal_Inovation_Agent.mp4",
  },
  {
    id: 4,
    name: "AI Sentiment Analysis",
    description: "Analyzes customer feedback and social media sentiment",
    detailedDescription:
      "The AI Sentiment Analysis agent monitors and analyzes customer feedback across multiple channels including social media, reviews, surveys, and support tickets. It uses advanced natural language processing to detect sentiment trends, identify potential issues before they escalate, and provide actionable insights for improving customer experience. The agent tracks sentiment over time and correlates it with business metrics to help organizations make data-driven decisions.",
    problems: [
      "Manual analysis of customer feedback is time-consuming and lacks scale",
      "Negative sentiment can go unnoticed until it impacts brand reputation significantly",
      "Difficult to identify patterns and trends across multiple feedback channels",
      "Delayed response to customer concerns leads to reduced satisfaction and loyalty",
    ],
    benefits: [
      "Monitors customer sentiment in real-time across all channels and platforms",
      "Identifies trending issues early, enabling proactive response and issue resolution",
      "Provides actionable insights to improve products, services, and customer experience",
      "Tracks sentiment trends over time to measure impact of business initiatives",
    ],
    icon: TrendingUp,
    category: "analytics",
    videoUrl: "/videos/AI_Sentiment_Analysis.mp4",
  },
  {
    id: 5,
    name: "Hotel Profiling Agent",
    description: "Creates comprehensive hotel profiles and recommendations",
    detailedDescription:
      "The Hotel Profiling Agent analyzes hotel data, guest reviews, amenities, location attributes, and market positioning to create detailed property profiles. It helps travel agencies, booking platforms, and hospitality businesses understand hotel offerings, identify suitable properties for different guest segments, and make data-driven recommendations. The agent continuously updates profiles based on new reviews and changes in hotel services.",
    problems: [
      "Creating detailed hotel profiles manually is extremely time-consuming",
      "Difficult to keep hotel information current with frequent changes in services and amenities",
      "Matching hotels to specific guest preferences requires extensive manual research",
      "Inconsistent hotel descriptions lead to guest dissatisfaction and booking issues",
    ],
    benefits: [
      "Automates hotel profiling with comprehensive analysis of amenities, reviews, and attributes",
      "Provides intelligent recommendations based on guest preferences and travel patterns",
      "Keeps hotel profiles continuously updated with latest information and reviews",
      "Improves booking conversion by matching guests with suitable properties accurately",
    ],
    icon: Server,
    category: "hospitality",
    videoUrl: "/videos/Hotel_Profiling.mp4",
  },
  {
    id: 6,
    name: "Enterprise GPT",
    description: "Custom enterprise AI assistant for organizational knowledge",
    detailedDescription:
      "Enterprise GPT is a sophisticated AI assistant customized for your organization's specific needs. It learns from your company's documentation, processes, and knowledge base to provide intelligent assistance to employees across all departments. The agent helps with information retrieval, process guidance, decision support, and workflow automation while maintaining enterprise-grade security and compliance.",
    problems: [
      "Employees waste time searching for information across multiple systems and documents",
      "Organizational knowledge is fragmented and difficult to access when needed",
      "New employees face steep learning curves understanding company processes",
      "Repetitive questions consume significant time from subject matter experts",
    ],
    benefits: [
      "Provides instant access to organizational knowledge and processes",
      "Reduces onboarding time by 60% through intelligent process guidance",
      "Improves productivity by automating routine tasks and information retrieval",
      "Maintains consistency in processes and decision-making across the organization",
    ],
    icon: Server,
    category: "enterprise",
    videoUrl: "/videos/Faber_demo.mp4",
  },
  {
    id: 7,
    name: "AI Sales Coach",
    description: "Provides real-time coaching and sales insights",
    detailedDescription:
      "The AI Sales Coach listens to sales calls in real-time, provides subtle coaching cues and suggestions during conversations, analyzes call recordings for performance insights, and generates personalized coaching recommendations. It tracks key metrics like talk time, question asking, objection handling, and closing techniques, helping sales reps improve their skills and close more deals.",
    problems: [
      "Sales reps lack real-time guidance during calls, missing opportunities to improve outcomes",
      "Struggle to apply best practices consistently across all sales interactions",
      "Limited feedback on sales performance makes it difficult to identify improvement areas",
      "Training and coaching are time-consuming and difficult to scale across large teams",
    ],
    benefits: [
      "Improves win rates by 25% through real-time coaching and best practice guidance",
      "Accelerates rep ramp-up time by providing immediate feedback and coaching",
      "Ensures consistent messaging and approach across all sales interactions",
      "Provides detailed performance analytics to identify coaching opportunities",
    ],
    icon: TrendingUp,
    category: "sales",
    videoUrl: "/videos/ai-sales-coach-demo.mp4",
  },
  {
    id: 8,
    name: "LinkedIn Marketing and Lead Generation Agent",
    description: "Automates LinkedIn marketing and lead generation campaigns",
    detailedDescription:
      "The LinkedIn Marketing and Lead Generation Agent automates your LinkedIn marketing strategy by identifying ideal prospects, crafting personalized outreach messages, managing connection requests, and nurturing relationships at scale. It analyzes prospect profiles to personalize messaging, tracks engagement metrics, and provides insights on campaign performance. The agent ensures compliance with LinkedIn's best practices while maximizing reach and conversion.",
    problems: [
      "Manual LinkedIn outreach is time-consuming and difficult to scale effectively",
      "Generic messaging leads to low response rates and poor engagement",
      "Difficult to identify and prioritize high-quality prospects consistently",
      "Tracking and following up with leads across multiple campaigns is challenging",
    ],
    benefits: [
      "Automates lead generation at scale while maintaining personalized outreach",
      "Increases response rates by 3x through AI-powered message personalization",
      "Identifies high-quality prospects based on ideal customer profile criteria",
      "Tracks engagement and automatically nurtures leads through the sales funnel",
    ],
    icon: Target,
    category: "marketing",
    videoUrl: "/videos/linkedin-marketing-demo.mp4",
  },
  {
    id: 9,
    name: "LinkedIn Sales Agent",
    description: "Manages LinkedIn sales prospecting and outreach",
    detailedDescription:
      "The LinkedIn Sales Agent specializes in B2B sales prospecting and relationship building on LinkedIn. It researches prospects, personalizes connection requests, initiates conversations, qualifies leads, and schedules meetings with interested prospects. The agent maintains a natural conversation flow, handles objections professionally, and seamlessly hands off qualified leads to your sales team with complete context.",
    problems: [
      "Sales teams struggle to maintain consistent LinkedIn prospecting activity",
      "Manual prospect research and message personalization is extremely time-consuming",
      "Difficult to track conversations and follow-ups across multiple prospects",
      "Low connection acceptance rates due to generic or poorly timed outreach",
    ],
    benefits: [
      "Maintains consistent prospecting activity with personalized outreach at scale",
      "Increases connection acceptance rates by 50% through intelligent targeting",
      "Qualifies leads automatically and schedules meetings with interested prospects",
      "Provides sales team with rich context on each prospect's interests and needs",
    ],
    icon: Briefcase,
    category: "sales",
    videoUrl: "/videos/linkedin-sales-demo.mp4",
  },
  {
    id: 10,
    name: "Meeting of Minutes Agent",
    description: "Automatically captures and summarizes meeting minutes",
    detailedDescription:
      "The Meeting of Minutes Agent joins your virtual meetings, captures discussion points, identifies action items, and generates comprehensive meeting summaries with timestamps and speaker attribution. It automatically distributes minutes to participants, tracks action item completion, and maintains a searchable archive of all meeting records. The agent integrates with your calendar and project management tools for seamless workflow.",
    problems: [
      "Manual note-taking during meetings reduces focus and engagement",
      "Inconsistent or incomplete meeting minutes lead to confusion and missed follow-ups",
      "Tracking action items across multiple meetings is challenging and time-consuming",
      "Searching through past meeting records to find specific discussions is difficult",
    ],
    benefits: [
      "Captures accurate meeting minutes automatically, allowing full participant engagement",
      "Identifies and tracks action items with automatic reminders and follow-ups",
      "Creates searchable meeting archive for easy reference and knowledge management",
      "Saves 30+ minutes per meeting in note-taking and summary distribution time",
    ],
    icon: FileText,
    category: "productivity",
    videoUrl: "/videos/meeting-minutes-demo.mp4",
  },
  {
    id: 11,
    name: "AI Newsletter Agent",
    description: "Creates and personalizes newsletter content automatically",
    detailedDescription:
      "The AI Newsletter Agent automates newsletter creation by curating relevant content, writing compelling copy, personalizing messages for different audience segments, and optimizing send times for maximum engagement. It analyzes subscriber behavior to recommend content topics, tracks performance metrics, and continuously improves content strategy based on engagement data. The agent maintains your brand voice and style while scaling content production.",
    problems: [
      "Creating engaging newsletter content consistently is time-consuming and resource-intensive",
      "Difficult to personalize content for different subscriber segments at scale",
      "Low open and click-through rates due to generic, one-size-fits-all content",
      "Tracking content performance and optimizing strategy requires significant manual analysis",
    ],
    benefits: [
      "Automates newsletter creation from content curation to final distribution",
      "Increases engagement by 40% through AI-powered personalization and optimization",
      "Maintains consistent publishing schedule without additional content team resources",
      "Provides actionable insights on content performance and subscriber preferences",
    ],
    icon: MessageSquare,
    category: "marketing",
    videoUrl: "/videos/newsletter-agent-demo.mp4",
  },
  {
    id: 12,
    name: "Marketing Customer Lead Agent",
    description: "Manages inbound and outbound marketing leads with intelligent scoring and routing.",
    detailedDescription:
      "The Marketing Customer Lead Agent centralizes lead capture from forms, campaigns, and events; scores each lead based on behaviour and profile fit; and automatically routes qualified leads into your CRM and sales workflows. It keeps lead data clean, de-duplicates entries, and provides clear visibility into pipeline health so marketing and sales stay aligned on which leads to prioritize.",
    problems: [
      "Leads arrive from many channels and are often inconsistent, duplicated, or incomplete.",
      "Manual lead qualification and routing slow down response times and reduce conversion rates.",
      "Marketing and sales teams lack a single, trusted view of lead quality and funnel performance.",
      "Valuable leads are sometimes missed or contacted too late due to fragmented workflows.",
    ],
    benefits: [
      "Unifies lead capture and automatically enriches and scores leads in real time.",
      "Routes leads to the right owner instantly based on territory, segment, or product line.",
      "Improves conversion rates by ensuring high-intent leads are contacted first.",
      "Gives marketing and sales a shared, transparent view of pipeline quality and volume.",
    ],
    icon: Target,
    category: "marketing",
    videoUrl: "",
  },
  {
    id: 13,
    name: "Voice Bot",
    description: "Handles customer calls with natural, human-like conversations.",
    detailedDescription:
      "The Voice Bot Agent answers inbound calls, understands natural speech, and handles common requests like account queries, order status, appointment booking, and basic troubleshooting. It can authenticate callers securely, escalate to human agents with full context when needed, and operate 24/7 across multiple languages and regions.",
    problems: [
      "High call volumes overwhelm support teams and lead to long wait times for customers.",
      "Human agents spend a large portion of their time on repetitive, low-complexity queries.",
      "Support quality and consistency vary significantly between agents and shifts.",
      "Providing 24/7 phone support is expensive and difficult to staff reliably.",
    ],
    benefits: [
      "Automates a large share of routine phone interactions with consistent, high-quality responses.",
      "Reduces wait times dramatically by answering calls instantly, even during peaks.",
      "Routes complex or sensitive calls to human agents with full interaction history.",
      "Provides always-on support without the cost and complexity of round-the-clock staffing.",
    ],
    icon: Phone,
    category: "support",
    videoUrl: "",
  },
  {
    id: 14,
    name: "AI Avataar Agent",
    description: "Creates interactive AI avatars for customer and employee experiences.",
    detailedDescription:
      "The AI Avataar Agent powers lifelike digital avatars that can speak, listen, and respond in real time for use in websites, kiosks, demos, and training experiences. It combines conversational AI with customizable visual personas, scripts, and flows, enabling you to deliver branded, human-like interactions without needing a live presenter or trainer.",
    problems: [
      "Live demos, onboarding, and training sessions do not scale well across time zones and audiences.",
      "Static videos and documents fail to keep users engaged or to answer follow-up questions.",
      "Creating high-quality, on-brand video content is expensive and time-consuming.",
      "Teams struggle to provide consistent messaging and experience across all touchpoints.",
    ],
    benefits: [
      "Delivers interactive, on-brand avatar experiences 24/7 without needing a live host.",
      "Lets users ask follow-up questions and explore flows at their own pace.",
      "Reduces video production costs by generating dynamic avatar content with AI.",
      "Ensures consistent messaging and experience across sales, support, and training use cases.",
    ],
    icon: MessageSquare,
    category: "marketing",
    videoUrl: "",
  },
  {
    id: 15,
    name: "HR Onboarding and Training Agent",
    description: "Guides new hires through onboarding and continuous training.",
    detailedDescription:
      "The HR Onboarding and Training Agent walks new employees through policies, tools, and workflows step by step, answering questions conversationally and surfacing relevant content based on their role and region. It can assign and track training modules, collect acknowledgements, and serve as an always-on HR companion for both new and existing employees.",
    problems: [
      "Onboarding experiences vary widely between teams and locations, causing confusion.",
      "HR and managers spend significant time repeatedly answering the same questions.",
      "Tracking completion of mandatory training and policy acknowledgements is error-prone.",
      "New hires often feel overwhelmed by information in their first weeks.",
    ],
    benefits: [
      "Standardizes onboarding with guided journeys tailored to each role and location.",
      "Gives employees an always-available assistant for HR, tooling, and process questions.",
      "Automatically tracks training completion and policy acknowledgements for compliance.",
      "Improves new-hire experience and time-to-productivity with structured, interactive support.",
    ],
    icon: Shield,
    category: "hr",
    videoUrl: "",
  },
  {
    id: 16,
    name: "Social Intelligence Platform Agent",
    description: "Monitors social channels and surfaces real-time brand and market insights.",
    detailedDescription:
      "The Social Intelligence Platform Agent ingests social media posts, comments, and messages across platforms to detect sentiment, trending topics, and emerging risks or opportunities around your brand, competitors, and market. It summarizes what matters, alerts the right teams, and provides drill-down views for deeper analysis.",
    problems: [
      "Manually tracking social mentions across platforms is time-consuming and incomplete.",
      "Important customer complaints or crises can go unnoticed until they escalate.",
      "Marketing and leadership lack a clear, real-time view of brand health and perception.",
      "Identifying useful market and competitor signals from noise is difficult at scale.",
    ],
    benefits: [
      "Continuously monitors social channels and surfaces what needs attention in real time.",
      "Alerts teams to potential crises or viral moments before they fully unfold.",
      "Provides clear dashboards and summaries of sentiment, themes, and influencers.",
      "Turns unstructured social chatter into actionable inputs for marketing and product teams.",
    ],
    icon: TrendingUp,
    category: "analytics",
    videoUrl: "",
  },
  {
    id: 17,
    name: "Autocad Engineering BOM Generator",
    description: "Generates accurate bills of materials directly from engineering drawings.",
    detailedDescription:
      "The Autocad Engineering BOM Generator reads CAD drawings, detects components, and automatically produces structured bills of materials with quantities, part numbers, and metadata ready for procurement and ERP systems. It reduces manual extraction effort and errors, especially for complex assemblies and frequent design revisions.",
    problems: [
      "Manually creating BOMs from engineering drawings is slow and error-prone.",
      "Design changes require repetitive updates to BOMs, creating version-control issues.",
      "Misalignment between engineering drawings and procurement data causes delays and rework.",
      "Engineers spend valuable time on documentation instead of design and validation.",
    ],
    benefits: [
      "Automatically converts CAD drawings into clean, structured BOMs in minutes.",
      "Keeps BOMs in sync with design revisions to reduce errors and mismatches.",
      "Integrates with procurement and ERP systems for smoother handoff to operations.",
      "Frees engineers from repetitive documentation tasks so they can focus on design.",
    ],
    icon: Wrench,
    category: "it",
    videoUrl: "",
  },
  {
    id: 18,
    name: "Dimension Measurer Agent",
    description: "Measures and validates dimensions from drawings and images.",
    detailedDescription:
      "The Dimension Measurer Agent analyzes engineering drawings, PDFs, or images to extract measurements, check tolerances, and validate them against engineering standards or project constraints. It can highlight discrepancies, generate measurement reports, and assist quality and inspection teams in verifying that designs and parts meet specifications.",
    problems: [
      "Manually checking dimensions across complex drawings is tedious and prone to oversight.",
      "Small dimensional errors can propagate into costly manufacturing or construction issues.",
      "Quality and inspection teams lack fast, automated tools to verify measurements at scale.",
      "Collaborating on measurements across distributed teams is difficult with static files.",
    ],
    benefits: [
      "Automatically reads and validates dimensions from drawings, PDFs, and images.",
      "Flags out-of-tolerance or inconsistent measurements before they cause downstream issues.",
      "Produces clear, shareable measurement and compliance reports for stakeholders.",
      "Accelerates quality and inspection workflows while improving measurement accuracy.",
    ],
    icon: FileText,
    category: "it",
    videoUrl: "",
  },
]

export default function AgentDetailPage() {
  const params = useParams()
  const agentId = Number.parseInt(params.id as string)
  const agent = allAgents.find((a) => a.id === agentId)

  if (!agent) {
    return (
      <MarketplaceLayout>
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Agent not found</h1>
            <Link href="/marketplace">
              <Button>Back to Marketplace</Button>
            </Link>
          </div>
        </div>
      </MarketplaceLayout>
    )
  }

  const IconComponent = agent.icon

  return (
    <MarketplaceLayout>
      <main className="max-w-6xl mx-auto p-6 md:p-12 bg-white">
        <div className="mb-8">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{agent.name}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{agent.detailedDescription}</p>
            </div>

            <div className="border border-border rounded-lg p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* The Problem */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                  <ul className="space-y-3">
                    {agent.problems.map((problem, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span className="text-muted-foreground text-sm leading-relaxed">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {agent.benefits.map((benefit, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span className="text-muted-foreground text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">How It Works?</h3>
                <CustomVideoPlayer videoUrl={agent.videoUrl} agentName={agent.name} />
              </div>

              <HoverButton
                className="w-full px-12 py-4 text-lg gap-2"
                glowColor="#3b82f6"
                backgroundColor="#111827"
                textColor="#ffffff"
                hoverTextColor="#93c5fd"

              >
                <div className="flex items-center justify-center gap-2">
                  Launch Agent
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </div>
              </HoverButton>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Do you need a customized version of this agent?</h3>
              <p className="text-muted-foreground">
                We can help with a tailored version of this agent that better suits your internal processes and
                requirements. Book a call with our agent builder team now.
              </p>
            </div>
            <Button variant="outline" size="lg" className="flex-shrink-0 bg-transparent">
              Speak to a Specialist
            </Button>
          </div>
        </div>
      </main>
    </MarketplaceLayout>
  )
}
