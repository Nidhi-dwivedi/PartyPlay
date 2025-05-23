import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { getRandomTruthOrDare } from '@/data/gameData';
import { playSound, createConfetti } from '@/utils/effects';

const TruthOrDare = () => {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("truth");
  const [level, setLevel] = useState("mild");
  const [isFlipping, setIsFlipping] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const generatePrompt = () => {
    setIsFlipping(true);
    playSound('woosh');
    setTimeout(() => {
      setPrompt(getRandomTruthOrDare(type, level));
      setIsFlipping(false);
    }, 300);
  };

  const handleComplete = () => {
    createConfetti(30);
    playSound('success');
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
                <li>Choose either "Truth" or "Dare" and select your preferred difficulty level.</li>
                <li>For "Truth", you must answer the question honestly.</li>
                <li>For "Dare", you must perform the action described.</li>
                <li>After completing the challenge, click "Completed!" to get the next one.</li>
                <li>If you don't want to do a particular truth or dare, click "Skip" (but try not to skip too often!).</li>
                <li>The game is most fun when everyone participates and is honest!</li>
              </ol>
            </CardContent>
          )}
        </Card>

        <div className="grid gap-6 mb-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Choose your path:</h4>
            <RadioGroup 
              defaultValue="truth" 
              value={type} 
              onValueChange={setType} 
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="truth" id="truth" />
                <Label htmlFor="truth">Truth</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dare" id="dare" />
                <Label htmlFor="dare">Dare</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Difficulty level:</h4>
            <RadioGroup 
              defaultValue="mild" 
              value={level} 
              onValueChange={setLevel} 
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mild" id="mild" />
                <Label htmlFor="mild">Mild</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="spicy" id="spicy" />
                <Label htmlFor="spicy">Spicy</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {prompt ? (
          <Card className={`w-full shadow-lg ${isFlipping ? 'animate-card-flip' : ''}`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-base font-medium">
                <Badge className={`${getLevelColor()} mb-2`}>
                  {type.charAt(0).toUpperCase() + type.slice(1)} - {level.charAt(0).toUpperCase() + level.slice(1)}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium py-6">
              {prompt}
            </CardContent>
            <CardFooter className="pt-3 flex justify-center gap-4">
              <Button onClick={handleComplete} variant="default">
                Completed!
              </Button>
              <Button onClick={generatePrompt} variant="outline">
                Skip
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="flex justify-center mt-4">
            <Button onClick={generatePrompt} size="lg" className="px-8">
              Generate {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TruthOrDare;
