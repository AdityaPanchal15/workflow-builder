import React, { useState, useCallback } from "react";
import { Node, Edge, addEdge, applyNodeChanges } from "react-flow-renderer";

import Header from '../components/Header';
import WorkflowCanvas from '../components/WorkflowCanvas';

const Home: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [nodeId, setNodeId] = useState(0);

  // Function to add a new node
  const onAddNode = (type: string) => {
    const newNode: Node = {
      id: `node-${nodeId}`,
      type: type, // Use the custom node type (taskNode or decisionNode)
      data: { label: `${type === "taskNode" ? "Task" : "Decision"} Node ${nodeId + 1}` },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    };
    setNodeId(nodeId + 1);
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  // Function to handle edge creation
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // Function to handle node changes (dragging)
  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  // Function to delete a node
  const onDeleteNode = (nodeId: string) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  };

  // Save the workflow state
  const saveWorkflow = () => {
    const workflow = { nodes, edges };
    localStorage.setItem('workflow', JSON.stringify(workflow));
    alert('Workflow saved!');
  };

  // Load the saved workflow
  const loadWorkflow = () => {
    const savedWorkflow = localStorage.getItem('workflow');
    if (savedWorkflow) {
      const { nodes, edges } = JSON.parse(savedWorkflow);
      setNodes(nodes);

      // Update nodeId based on the max id of loaded nodes
      const maxId = Math.max(...nodes.map((node: any) => parseInt(node.id.split('-')[1], 10)));
      setNodeId(maxId + 1); // Start the next nodeId from the next available number

      setEdges(edges);
      alert('Workflow loaded!');
    } else {
      alert('No saved workflow found.');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header section */}
      <Header onAddNode={onAddNode} saveWorkflow={saveWorkflow} loadWorkflow={loadWorkflow} />

      {/* Workflow Canvas */}
      <WorkflowCanvas
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onDeleteNode={onDeleteNode}
      />
    </div>
  );
};

export default Home;
