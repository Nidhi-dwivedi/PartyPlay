import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { getRandomCharades } from '@/data/gameData';
import { playSound, createConfetti } from '@/utils/effects';

const Charades = () => {
  const [charade, setCharade] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    if (!charade) {
      setCharade(getRandomCharades());
    }
  }, [charade]);

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            playSound('timer');
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const handleNewCharade = () => {
    setIsFlipping(true);
    playSound('woosh');
    setTimeout(() => {
      setCharade(getRandomCharades());
      setIsFlipping(false);
    }, 300);
  };

  const startGame = () => {
    setTimeLeft(60);
    setIsPlaying(true);
    playSound('click');
  };

  const resetGame = () => {
    setTimeLeft(60);
    setIsPlaying(false);
    handleNewCharade();
    playSound('click');
  };

  const celebrate = () => {
    createConfetti(30);
    playSound('success');
    handleNewCharade();
  };

  const getDifficultyColor = () => {
    if (!charade) return "";
    switch (charade.difficulty) {
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
                <li>This is a mime game where one player acts out a phrase without speaking.</li>
                <li>Press "Start Game" to reveal a phrase and begin the timer.</li>
                <li>The actor must communicate the phrase using only gestures and body movements.</li>
                <li>No talking, mouthing words, or sound effects are allowed!</li>
                <li>When teammates correctly guess the phrase, press "Guessed It!"</li>
                <li>Try to guess as many phrases as possible before time runs out.</li>
              </ol>
            </CardContent>
          )}
        </Card>

        <Card className={`w-full shadow-lg ${isFlipping ? 'animate-card-flip' : ''}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-center flex justify-center gap-2">
              {charade && (
                <>
                  <Badge variant="outline">
                    {charade.category}
                  </Badge>
                  <Badge className={getDifficultyColor()}>
                    {charade.difficulty.charAt(0).toUpperCase() + charade.difficulty.slice(1)}
                  </Badge>
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-xl font-bold py-6">
            {isPlaying ? charade?.phrase : "Press Start to Reveal Phrase"}
          </CardContent>
          <CardFooter className="pt-3 pb-6 flex justify-center gap-4">
            <Button onClick={celebrate} disabled={!isPlaying} variant="default">
              Guessed It!
            </Button>
            <Button onClick={handleNewCharade} disabled={!isPlaying} variant="outline">
              Skip
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="w-full max-w-md mt-2">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium">Time Left: {timeLeft}s</span>
          <Progress value={(timeLeft / 60) * 100} className="h-2" />
        </div>

        <div className="flex justify-center gap-4">
          {!isPlaying ? (
            <Button onClick={startGame} variant="default" className="px-8">
              {timeLeft === 60 ? 'Start Game' : 'Resume Game'}
            </Button>
          ) : (
            <Button onClick={() => setIsPlaying(false)} variant="outline">
              Pause
            </Button>
          )}
          <Button onClick={resetGame} variant="secondary">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Charades;
