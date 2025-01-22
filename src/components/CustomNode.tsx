import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

const CustomNode = ({ id, data }: any) => {
  return (
    <div
      style={{
        padding: 10,
        border: '1px solid black',
        borderRadius: 4,
        background: '#fff',
        position: 'relative',
      }}
    >
      <div>{data.label}</div>
      
      {/* Delete Icon */}
      <button
        onClick={() => data.onDelete(id)} // Call the delete function passed via props
        style={{
          padding: '2px 0',
          position: 'absolute',
          top: -10,
          right: -10,
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 20,
          height: 20,
          cursor: 'pointer',
        }}
      >
        ×
      </button>
      
      {/* Connection Handles */}
      <Handle type="target" style={{ background: 'blue' }} position={Position.Top} />
      <Handle type="source" style={{ background: 'green' }} position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
