// Model Providers Data
export interface ModelProvider {
  id: string
  name: string
  description: string
  models?: string[]
  additionalModelsCount?: number
  status: "available" | "coming-soon"
  iconColor: string
  iconLetter: string
  isSelected?: boolean
  logoImage?: string
}

export const modelProviders: ModelProvider[] = [
  {
    id: "amazon-bedrock",
    name: "Amazon Bedrock",
    description: "Models available from Amazon Bedrock. Supports US & EU regions",
    status: "available",
    iconColor: "bg-orange-500",
    iconLetter: "A",
    logoImage: "/aws-bedrock-logo.png",
  },
  {
    id: "openai",
    name: "OpenAI",
    description: "Models available from OpenAI and hosted by our marketplace.",
    models: ["gpt-4o"],
    additionalModelsCount: 5,
    status: "available",
    iconColor: "bg-green-600",
    iconLetter: "O",
    isSelected: true,
    logoImage: "/openai-logo.png",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    description: "Models available from Anthropic",
    models: ["claude-3-5-sonnet-latest"],
    additionalModelsCount: 1,
    status: "available",
    iconColor: "bg-orange-600",
    iconLetter: "A",
    logoImage: "/anthropic-logo.png",
  },
  {
    id: "google",
    name: "Google",
    description: "Models available from Google Gemini",
    models: ["gemini-2.0-flash-exp"],
    additionalModelsCount: 2,
    status: "available",
    iconColor: "bg-blue-500",
    iconLetter: "G",
    logoImage: "/google-logo.png",
  },
  {
    id: "groq",
    name: "Groq",
    description: "Models available from Groq",
    status: "available",
    iconColor: "bg-purple-600",
    iconLetter: "G",
    logoImage: "/groq-logo.png",
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    description: "Models available from Hugging Face",
    status: "available",
    iconColor: "bg-yellow-500",
    iconLetter: "H",
    logoImage: "/hf-logo.png",
  },
  {
    id: "nvidia",
    name: "Nvidia",
    description: "Models available from Nvidia",
    status: "available",
    iconColor: "bg-green-600",
    iconLetter: "N",
    logoImage: "/nvidia-logo.png",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "API credentials and settings for ElevenLabs Text-to-Speech service",
    status: "available",
    iconColor: "bg-indigo-600",
    iconLetter: "E",
    logoImage: "/elevenlabs-logo.png",
  },
  {
    id: "deepgram",
    name: "Deepgram",
    description: "API credentials and settings for Deepgram ASR service",
    status: "available",
    iconColor: "bg-blue-600",
    iconLetter: "D",
    logoImage: "/deepgram-logo.webp",
  },
  {
    id: "ibm-watsonx",
    name: "IBM watsonx",
    description: "Models available from IBM watsonx",
    status: "coming-soon",
    iconColor: "bg-blue-700",
    iconLetter: "I",
    logoImage: "/ibm-logo.png",
  },
]

export function getModelProviderById(id: string): ModelProvider | undefined {
  return modelProviders.find((provider) => provider.id === id)
}
