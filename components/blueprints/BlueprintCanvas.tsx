"use client"

import { useCallback, useEffect, useState } from "react"
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  useReactFlow,
} from "reactflow"
import "reactflow/dist/style.css"
import type { BlueprintWorkflow } from "@/lib/blueprint-workflows"
import ManagerNode from "./ManagerNode"
import SubAgentNode from "./SubAgentNode"
import CanvasControls from "./CanvasControls"

const nodeTypes = {
  manager: ManagerNode,
  subagent: SubAgentNode,
}

interface BlueprintCanvasProps {
  workflow: BlueprintWorkflow
}

function FitViewOnLoad() {
  const { fitView } = useReactFlow()

  useEffect(() => {
    setTimeout(() => {
      fitView({ padding: 0.2, duration: 400 })
    }, 100)
  }, [fitView])

  return null
}

export default function BlueprintCanvas({ workflow }: BlueprintCanvasProps) {
  const [panMode, setPanMode] = useState(false)

  const initialNodes: Node[] = workflow.nodes.map((node) => ({
    id: node.id,
    type: node.type,
    position: node.position,
    data: {
      name: node.name,
      description: node.description,
      provider: node.provider,
    },
    draggable: !panMode,
  }))

  const initialEdges: Edge[] = workflow.edges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    label: edge.label,
    type: "smoothstep",
    animated: false,
    style: { stroke: "#9ca3af", strokeWidth: 2 },
    labelStyle: { fill: "#6b7280", fontWeight: 500, fontSize: 12 },
  }))

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const handlePanModeToggle = useCallback(() => {
    setPanMode((prev) => !prev)
  }, [])

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        draggable: !panMode,
      }))
    )
  }, [panMode, setNodes])

  return (
    <div className="w-full h-[600px] border border-gray-200 rounded-lg bg-gray-50 relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        minZoom={0.1}
        maxZoom={2}
        panOnDrag={panMode}
        panOnScroll={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
      >
        <Background
          gap={16}
          size={1}
          color="#d1d5db"
        />
        <FitViewOnLoad />
        <CanvasControls panMode={panMode} onPanModeToggle={handlePanModeToggle} />
      </ReactFlow>
    </div>
  )
}
