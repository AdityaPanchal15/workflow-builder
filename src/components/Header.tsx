import React from 'react';

interface HeaderProps {
  onAddNode: (type: string) => void;
  saveWorkflow: () => void;
  loadWorkflow: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddNode, saveWorkflow, loadWorkflow }) => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Workflow Builder</h1>
      <div className="space-x-4">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={() => onAddNode("taskNode")}
        >
          Add Task Node
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => onAddNode("decisionNode")}
        >
          Add Decision Node
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={saveWorkflow}
        >
          Save Workflow
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={loadWorkflow}
        >
          Load Workflow
        </button>
      </div>
    </header>
  );
};

export default Header;
