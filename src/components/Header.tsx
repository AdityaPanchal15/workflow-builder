import React from 'react';

interface HeaderProps {
  onAddNode: () => void;
  saveWorkflow: () => void;
  loadWorkflow: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddNode, saveWorkflow, loadWorkflow }) => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Workflow Builder</h1>
        <div className="space-x-4">
          <button 
            onClick={onAddNode} 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Add Node
          </button>
          <button 
            onClick={saveWorkflow} 
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Save Workflow
          </button>
          <button 
            onClick={loadWorkflow} 
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
          >
            Load Workflow
          </button>
        </div>
      </header>
  );
};

export default Header;
