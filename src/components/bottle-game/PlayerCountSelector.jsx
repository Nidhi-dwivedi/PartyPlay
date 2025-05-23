
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PlayerCountSelector = ({ playerCount, onPlayerCountChange }) => {
  const handleInputChange = (e) => {
    const count = parseInt(e.target.value) || 2;
    onPlayerCountChange(Math.max(2, Math.min(20, count)));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-medium">Number of players:</h4>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="px-2 h-8 w-8"
            onClick={() => onPlayerCountChange(Math.max(2, playerCount - 1))}
          >-</Button>
          <Input
            type="number"
            value={playerCount}
            onChange={handleInputChange}
            min="2"
            max="20"
            className="w-16 h-8 text-center"
          />
          <Button 
            variant="outline" 
            size="sm" 
            className="px-2 h-8 w-8"
            onClick={() => onPlayerCountChange(Math.min(20, playerCount + 1))}
          >+</Button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCountSelector;
