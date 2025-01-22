import React from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Node,
  Edge,
  NodeTypes,
} from 'react-flow-renderer';
import CustomNode from './CustomNode';

// Define nodeTypes outside the component
const nodeTypes: NodeTypes = {
  customNode: CustomNode,
};

interface WorkflowCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onConnect: (params: any) => void;
  onNodesChange: (changes: any) => void;
  onDeleteNode: (id: string) => void;
}

const WorkflowCanvas: React.FC<WorkflowCanvasProps> = ({
  nodes,
  edges,
  onConnect,
  onNodesChange,
  onDeleteNode,
}) => {
  return (
    <div className="flex-1 overflow-hidden bg-gray-100">
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: { ...node.data, onDelete: onDeleteNode }, // Add onDelete dynamically
        }))}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes} // Use the stable nodeTypes
        fitView
        className="h-full" // Full height to fill the parent div
      >
        <MiniMap nodeStrokeWidth={3} className="bg-white border-gray-200" />
        <Controls />
        <Background color="#f0f0f0" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default WorkflowCanvas;
