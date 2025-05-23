
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const LevelSelector = ({ level, onLevelChange }) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-3">Spiciness level:</h4>
      <RadioGroup 
        value={level} 
        onValueChange={onLevelChange} 
        className="flex gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="mild" id="bottle-mild" />
          <Label htmlFor="bottle-mild">Mild</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="medium" id="bottle-medium" />
          <Label htmlFor="bottle-medium">Medium</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="spicy" id="bottle-spicy" />
          <Label htmlFor="bottle-spicy">Spicy</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default LevelSelector;
