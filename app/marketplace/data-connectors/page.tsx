"use client"

import { useState } from "react"
import { MarketplaceLayout } from "@/components/marketplace-layout"
import { ConnectorCard } from "@/components/connector-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Database,
  Box,
  FileText,
  Search,
  ExternalLink,
  Server,
  HardDrive,
  Network,
  Layers,
} from "lucide-react"

// Icon components for connectors
const WeaviateIcon = () => (
  <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center text-white font-bold text-xs">
    W
  </div>
)

const QdrantIcon = () => (
  <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center text-white font-bold text-xs">
    Q
  </div>
)

const PGVectorIcon = () => (
  <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white">
    <Database className="w-4 h-4" />
  </div>
)

const Neo4jIcon = () => (
  <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
    N
  </div>
)

const MongoDBIcon = () => (
  <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center text-white">
    <Server className="w-4 h-4" />
  </div>
)

const PostgreSQLIcon = () => (
  <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
    <Database className="w-4 h-4" />
  </div>
)

const PineconeIcon = () => (
  <div className="w-6 h-6 rounded bg-amber-500 flex items-center justify-center text-white">
    <Layers className="w-4 h-4" />
  </div>
)

const ChromaIcon = () => (
  <div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center text-white font-bold text-xs">
    C
  </div>
)

const MilvusIcon = () => (
  <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
    M
  </div>
)

const S3Icon = () => (
  <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-white">
    <HardDrive className="w-4 h-4" />
  </div>
)

const GoogleDriveIcon = () => (
  <div className="w-6 h-6 rounded bg-blue-400 flex items-center justify-center text-white">
    <Box className="w-4 h-4" />
  </div>
)

const DropboxIcon = () => (
  <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white">
    <Box className="w-4 h-4" />
  </div>
)

type ConnectorCategory = "all" | "database" | "vector-store" | "file-storage"

const connectors = [
  // Vector Stores
  {
    id: "weaviate",
    name: "Weaviate",
    description: "Configure Weaviate Vector Store for semantic search and AI-powered data retrieval",
    icon: WeaviateIcon,
    category: "vector-store" as const,
    statusText: "0 DB's connected",
  },
  {
    id: "qdrant",
    name: "Qdrant",
    description: "Connect Qdrant vector database for high-performance similarity search",
    icon: QdrantIcon,
    category: "vector-store" as const,
    statusText: "0 DB's connected",
  },
  {
    id: "pgvector",
    name: "PG-Vector",
    description: "Set up PostgreSQL with pgvector extension for vector similarity search",
    icon: PGVectorIcon,
    category: "vector-store" as const,
    statusText: "0 DB's connected",
  },
  {
    id: "pinecone",
    name: "Pinecone",
    description: "Integrate Pinecone managed vector database for scalable similarity search",
    icon: PineconeIcon,
    category: "vector-store" as const,
    statusText: "0 DB's connected",
  },
  {
    id: "chroma",
    name: "Chroma",
    description: "Connect ChromaDB for embedding storage and retrieval in AI applications",
    icon: ChromaIcon,
    category: "vector-store" as const,
    statusText: "0 DB's connected",
  },
  {
    id: "milvus",
    name: "Milvus",
    description: "Configure Milvus vector database for large-scale similarity search",
    icon: MilvusIcon,
    category: "vector-store" as const,
    statusText: "0 DB's connected",
  },
  // Databases
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Connect PostgreSQL database for structured data storage and queries",
    icon: PostgreSQLIcon,
    category: "database" as const,
    statusText: "0 DB's connected",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description: "Integrate MongoDB for flexible document-based data storage",
    icon: MongoDBIcon,
    category: "database" as const,
    statusText: "0 DB's connected",
  },
  {
    id: "neo4j",
    name: "Neo4j",
    description: "Connect Neo4j graph database for relationship-based data queries",
    icon: Neo4jIcon,
    category: "database" as const,
    statusText: "0 DB's connected",
  },
  // File Storage
  {
    id: "s3",
    name: "AWS S3",
    description: "Connect Amazon S3 for cloud-based file storage and retrieval",
    icon: S3Icon,
    category: "file-storage" as const,
    statusText: "0 files",
  },
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Integrate Google Drive for document storage and file management",
    icon: GoogleDriveIcon,
    category: "file-storage" as const,
    statusText: "0 files",
  },
  {
    id: "dropbox",
    name: "Dropbox",
    description: "Connect Dropbox for cloud file storage and synchronization",
    icon: DropboxIcon,
    category: "file-storage" as const,
    statusText: "0 files",
  },
]

export default function DataConnectorsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ConnectorCategory>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConnectors = connectors.filter((connector) => {
    const matchesCategory = selectedCategory === "all" || connector.category === selectedCategory
    const matchesSearch =
      connector.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      connector.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categoryCounts = {
    all: connectors.length,
    database: connectors.filter((c) => c.category === "database").length,
    "vector-store": connectors.filter((c) => c.category === "vector-store").length,
    "file-storage": connectors.filter((c) => c.category === "file-storage").length,
  }

  return (
    <MarketplaceLayout>
      <main className="p-6 md:p-12 bg-white">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-4xl font-bold mb-2">Data Connectors</h1>
              <p className="text-muted-foreground text-base">
                Set up and manage connections to external data sources and services.
              </p>
            </div>
            <Button variant="ghost" size="sm" className="gap-2">
              Video
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border hover:border-primary/50 hover:shadow-sm"
              }`}
            >
              All {categoryCounts.all}
            </button>
            <button
              onClick={() => setSelectedCategory("database")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === "database"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border hover:border-primary/50 hover:shadow-sm"
              }`}
            >
              Database {categoryCounts.database}
            </button>
            <button
              onClick={() => setSelectedCategory("vector-store")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === "vector-store"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border hover:border-primary/50 hover:shadow-sm"
              }`}
            >
              Vector Store {categoryCounts["vector-store"]}
            </button>
            <button
              onClick={() => setSelectedCategory("file-storage")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === "file-storage"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border hover:border-primary/50 hover:shadow-sm"
              }`}
            >
              File Storage {categoryCounts["file-storage"]}
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search data connectors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-white"
            />
          </div>
        </div>

        {/* Connector Cards Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredConnectors.map((connector) => (
              <ConnectorCard
                key={connector.id}
                id={connector.id}
                name={connector.name}
                description={connector.description}
                icon={connector.icon}
                category={connector.category}
                statusText={connector.statusText}
              />
            ))}
          </div>

          {filteredConnectors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No connectors found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </MarketplaceLayout>
  )
}

