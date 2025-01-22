import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

const CustomNode = ({ id, data }: any) => {
  return (
    <div className="p-2 border border-black rounded-md bg-white relative">
      <div className='text-xs'>{data.label}</div>
      
      {/* Delete Icon */}
      <button
        onClick={() => data.onDelete(id)} // Call the delete function passed via props
        className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-red-500 text-white border-none rounded-full cursor-pointer flex items-center justify-center"
      >
        ×
      </button>
      
      {/* Connection Handles */}
      <Handle type="target" className="!bg-blue-500" position={Position.Top} />
      <Handle type="source" className="!bg-green-500" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
