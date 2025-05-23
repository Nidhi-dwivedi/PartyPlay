
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getRandomSpinBottleAction, getDefaultPlayerCount, savePlayerCount } from '@/data/gameData';
import { playSound } from '@/utils/effects';
import BottleCanvas from './bottle-game/BottleCanvas';
import PlayerCountSelector from './bottle-game/PlayerCountSelector';
import LevelSelector from './bottle-game/LevelSelector';
import ActionDisplay from './bottle-game/ActionDisplay';

const SpinBottle = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [action, setAction] = useState('');
  const [level, setLevel] = useState('mild');
  const [playerCount, setPlayerCount] = useState(getDefaultPlayerCount);
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(null);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    // Save player count
    savePlayerCount(playerCount);
  }, [playerCount]);

  const spinBottle = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setAction('');
    playSound('woosh');
    
    // Random rotation between 3-8 full rotations plus random offset to point to a player
    const randomPlayerIndex = Math.floor(Math.random() * playerCount);
    const playerAngle = (randomPlayerIndex / playerCount) * 360;
    const fullRotations = 1080 + Math.random() * 1800; // 3-8 full rotations (1080-2880 degrees)
    const newRotation = fullRotations + playerAngle;
    
    setRotation(newRotation);
    setSelectedPlayerIndex(randomPlayerIndex);
    
    setTimeout(() => {
      setIsSpinning(false);
      setAction(getRandomSpinBottleAction(level));
      playSound('success');
    }, 3000); // Duration of spin animation
  };

  const handlePlayerCountChange = (count) => {
    setPlayerCount(count);
    setSelectedPlayerIndex(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="w-full max-w-md">
        <Card className="mb-6 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center justify-between">
              Game Rules
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowRules(!showRules)}
              >
                {showRules ? 'Hide' : 'Show'}
              </Button>
            </CardTitle>
          </CardHeader>
          {showRules && (
            <CardContent className="pb-4 text-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Players sit in a circle around the screen.</li>
                <li>Set the number of players to match your group.</li>
                <li>Take turns clicking the "Spin Bottle" button.</li>
                <li>The bottle will spin and point to a random player.</li>
                <li>The selected player must complete the dare that appears.</li>
                <li>Choose an appropriate spiciness level for your group.</li>
              </ol>
            </CardContent>
          )}
        </Card>

        <div className="grid gap-6 mb-6">
          <PlayerCountSelector 
            playerCount={playerCount} 
            onPlayerCountChange={handlePlayerCountChange} 
          />
          
          <LevelSelector 
            level={level} 
            onLevelChange={setLevel} 
          />
        </div>

        <Card className="w-full shadow-lg">
          <CardContent className="pt-6 pb-0 flex flex-col items-center">
            <div className="w-64 h-64 rounded-full flex items-center justify-center my-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full"></div>
              <BottleCanvas 
                rotation={rotation} 
                playerCount={playerCount} 
                isSpinning={isSpinning} 
              />
            </div>
            
            {selectedPlayerIndex !== null && !isSpinning && (
              <div className="mb-2 text-center animate-fade-in">
                <span className="font-semibold text-primary">Player {selectedPlayerIndex + 1}</span> was selected!
              </div>
            )}
            
            <ActionDisplay action={action} />
          </CardContent>
          <CardFooter className="pt-3 pb-6 flex justify-center">
            <Button 
              onClick={spinBottle} 
              disabled={isSpinning}
              size="lg"
              className="px-8"
            >
              {isSpinning ? 'Spinning...' : 'Spin Bottle'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SpinBottle;
