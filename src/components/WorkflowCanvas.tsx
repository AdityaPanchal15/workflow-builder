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
    <div style={{ flex: 1 }}>
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
        style={{ background: '#f0f0f0', height: '100%' }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default WorkflowCanvas;
