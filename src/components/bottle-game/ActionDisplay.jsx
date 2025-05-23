
import React from 'react';

const ActionDisplay = ({ action }) => {
  if (!action) return null;
  
  return (
    <div className="text-center my-4 p-4 text-lg font-medium animate-pulse bg-primary/10 rounded-lg shadow-md">
      <span className="font-bold">Dare:</span> {action}
    </div>
  );
};

export default ActionDisplay;
