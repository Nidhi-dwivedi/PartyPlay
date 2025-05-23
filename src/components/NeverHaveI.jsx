
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { getRandomNeverHaveI, getDefaultPlayerCount, savePlayerCount } from '@/data/gameData';
import { playSound, createConfetti } from '@/utils/effects';

const NeverHaveI = () => {
  const [prompt, setPrompt] = useState("");
  const [level, setLevel] = useState("mild");
  const [isFlipping, setIsFlipping] = useState(false);
  const [usedPrompts, setUsedPrompts] = useState([]);
  const [playerCount, setPlayerCount] = useState(getDefaultPlayerCount);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    // Reset used prompts when level changes
    setUsedPrompts([]);
  }, [level]);

  useEffect(() => {
    // Save player count
    savePlayerCount(playerCount);
  }, [playerCount]);

  const generatePrompt = () => {
    setIsFlipping(true);
    playSound('woosh');
    setTimeout(() => {
      const newPrompt = getRandomNeverHaveI(level, usedPrompts);
      setPrompt(newPrompt);
      setUsedPrompts(prev => [...prev, newPrompt]);
      setIsFlipping(false);
    }, 300);
  };

  const handleRespond = (hasDone) => {
    if (hasDone) {
      createConfetti(20);
      playSound('success');
    } else {
      playSound('click');
    }
    generatePrompt();
  };

  const getLevelColor = () => {
    switch (level) {
      case "mild": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "spicy": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "";
    }
  };

  const handlePlayerCountChange = (e) => {
    const count = parseInt(e.target.value) || 2;
    setPlayerCount(Math.max(2, Math.min(20, count))); 
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="grid gap-2 text-center">
        <h3 className="text-lg font-medium">Never Have I Ever</h3>
        <p className="text-muted-foreground">
          A classic game of admissions and confessions!
        </p>
      </div>

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
                <li>The statement "Never have I ever..." is shown.</li>
                <li>Each player must respond honestly whether they have or haven't done the activity.</li>
                <li>If you <strong>have</strong> done the activity, click "I Have" and share your story (optional).</li>
                <li>If you <strong>haven't</strong> done the activity, click "I Haven't".</li>
                <li>The game works best when players are honest! Everyone takes a turn responding.</li>
                <li>Choose an appropriate spiciness level for your group.</li>
              </ol>
            </CardContent>
          )}
        </Card>

        <div className="grid gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium">Number of players:</h4>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="px-2 h-8 w-8"
                  onClick={() => setPlayerCount(prev => Math.max(2, prev - 1))}
                >-</Button>
                <Input
                  type="number"
                  value={playerCount}
                  onChange={handlePlayerCountChange}
                  min="2"
                  max="20"
                  className="w-16 h-8 text-center"
                />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="px-2 h-8 w-8"
                  onClick={() => setPlayerCount(prev => Math.min(20, prev + 1))}
                >+</Button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3">Spiciness level:</h4>
            <RadioGroup 
              defaultValue="mild" 
              value={level} 
              onValueChange={setLevel} 
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mild" id="nhie-mild" />
                <Label htmlFor="nhie-mild">Mild</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="nhie-medium" />
                <Label htmlFor="nhie-medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="spicy" id="nhie-spicy" />
                <Label htmlFor="nhie-spicy">Spicy</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {prompt ? (
          <Card className={`w-full shadow-lg ${isFlipping ? 'animate-card-flip' : ''}`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-base font-medium">
                <Badge className={`${getLevelColor()} mb-2`}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-xl font-medium py-6">
              {prompt}
            </CardContent>
            <CardFooter className="pt-3 flex justify-center gap-4">
              <Button onClick={() => handleRespond(true)} variant="default">
                I Have
              </Button>
              <Button onClick={() => handleRespond(false)} variant="outline">
                I Haven't
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="flex justify-center mt-4">
            <Button onClick={generatePrompt} size="lg" className="px-8">
              Start Game
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NeverHaveI;
