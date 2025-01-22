// components/Controls.tsx
import React from 'react';

interface ControlsProps {
  onAddNode: () => void;
  saveWorkflow: () => void;
  loadWorkflow: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onAddNode, saveWorkflow, loadWorkflow }) => {
  return (
    <div className="controls" style={{ padding: '10px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
      <button onClick={onAddNode}>Add Node</button>
      <button onClick={saveWorkflow}>Save Workflow</button>
      <button onClick={loadWorkflow}>Load Workflow</button>
    </div>
  );
};

export default Controls;
