import { useState, useCallback } from "react";
import {
  ReactFlow,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
  type FitViewOptions,
  type OnConnect,
  type OnNodesChange,
  type OnEdgesChange,
  type OnNodeDrag,
  type DefaultEdgeOptions,
  type EdgeTypes,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { SystemNode } from "./components/nodes/system-node";
import { ModeToggle } from "./components/theme/mode-toggle";
import FloatingEdge from "./components/edges/floating-edge";
import FloatingConnectionLine from "./components/connections/floating-connection-line";
import { initialElements } from "./constants/rootLayer";

const { nodes: initialNodes, edges: initialEdges } = initialElements();

const edgeTypes: EdgeTypes = {
  floating: FloatingEdge,
};

// const initialNodes: Node[] = [
//   {
//     id: "1",
//     data: { label: "Node 1" },
//     position: { x: 0, y: 0 },
//     type: "base",
//   },
//   {
//     id: "2",
//     data: { label: "Node 2" },
//     position: { x: 0, y: 300 },
//     type: "base",
//   },
// ];

// const initialEdges: Edge[] = [{ id: "1-2", source: "1", target: "2" }];

const fitViewOptions: FitViewOptions = {
  padding: 2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const onNodeDrag: OnNodeDrag = (_, node) => {
  console.log("drag event", node.data);
};

const App = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "floating",
            markerEnd: { type: MarkerType.Arrow },
          },
          eds,
        ),
      ),
    [setEdges],
  );

  return (
    <div
      className="floating-edges"
      style={{ height: 800 }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        edgeTypes={edgeTypes}
        connectionLineComponent={FloatingConnectionLine}
        colorMode="system"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default App;
