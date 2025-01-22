import React from "react";
import { Handle, Position } from "react-flow-renderer";

const DecisionNode = ({ id, data }: any) => {
  return (
    <div className="bg-yellow-500 text-white p-4 rounded shadow">
      <div className="text-xs">{data.label}</div>
      {/* Delete Icon */}
      <button
        onClick={() => data.onDelete(id)} // Call the delete function passed via props
        className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-red-500 text-white border-none rounded-full cursor-pointer flex items-center justify-center"
      >
        ×
      </button>
      <div className="flex justify-around mt-4">
        <button className="bg-green-500 px-2 py-2 rounded mr-1 text-sm">Yes</button>
        <button className="bg-red-500 px-2 py-2 rounded text-sm">No</button>
      </div>
      <Handle type="target" position={Position.Top} style={{ background: "yellow" }} />
      <Handle type="source" position={Position.Bottom} style={{ background: "yellow" }} />
    </div>
  );
};

export default DecisionNode;
