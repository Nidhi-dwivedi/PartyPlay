
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getRandomWouldYouRather } from '@/data/gameData';
import { playSound, createConfetti } from '@/utils/effects';
import { Separator } from '@/components/ui/separator';

const WouldYouRather = () => {
  const [options, setOptions] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const generateOptions = () => {
    setIsFlipping(true);
    setSelectedOption(null);
    playSound('woosh');
    setTimeout(() => {
      setOptions(getRandomWouldYouRather());
      setIsFlipping(false);
    }, 300);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    createConfetti(20);
    playSound('click');
    setTimeout(generateOptions, 1500);
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
                <li>Two scenarios will be presented - you must choose one!</li>
                <li>There is no "neither" option - you have to pick one of the two choices.</li>
                <li>After selecting, the next question will appear automatically.</li>
                <li>If you want to skip the current question, click the "Skip" button.</li>
                <li>The goal is to learn more about each other's preferences and thinking.</li>
                <li>For more fun, explain why you chose your answer!</li>
              </ol>
            </CardContent>
          )}
        </Card>

        {options ? (
          <Card className={`w-full shadow-lg ${isFlipping ? 'animate-card-flip' : ''}`}>
            <CardContent className="pt-6 pb-0">
              <div className="text-center mb-4 text-lg font-semibold">
                Would you rather...
              </div>
              
              <div className="grid gap-6 my-4">
                <Button 
                  onClick={() => handleSelect('option1')} 
                  variant={selectedOption === 'option1' ? 'default' : 'outline'} 
                  className={`h-auto py-4 px-6 text-left ${selectedOption === 'option1' ? 'ring-2 ring-primary' : ''}`}
                  disabled={selectedOption !== null}
                >
                  {options.option1}
                </Button>
                
                <div className="flex items-center justify-center">
                  <div className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm">
                    OR
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleSelect('option2')} 
                  variant={selectedOption === 'option2' ? 'default' : 'outline'} 
                  className={`h-auto py-4 px-6 text-left ${selectedOption === 'option2' ? 'ring-2 ring-primary' : ''}`}
                  disabled={selectedOption !== null}
                >
                  {options.option2}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="pt-3 pb-6 flex justify-center">
              <Button onClick={generateOptions} variant="secondary" disabled={selectedOption !== null}>
                Skip
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="flex justify-center mt-4">
            <Button onClick={generateOptions} size="lg" className="px-8">
              Start Game
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WouldYouRather;
