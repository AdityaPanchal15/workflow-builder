import React from "react";
import { Handle, Position } from "react-flow-renderer";

const TaskNode = ({ id, data }: any) => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded shadow">
      <div className="text-xs">{data.label}</div>
      {/* Delete Icon */}
      <button
        onClick={() => data.onDelete(id)} // Call the delete function passed via props
        className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-red-500 text-white border-none rounded-full cursor-pointer flex items-center justify-center"
      >
        ×
      </button>
      <Handle type="target" position={Position.Top} style={{ background: "blue" }} />
      <Handle type="source" position={Position.Bottom} style={{ background: "blue" }} />
    </div>
  );
};

export default TaskNode;
