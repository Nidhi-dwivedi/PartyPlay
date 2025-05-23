import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { getRandomTabooCard } from '@/data/gameData';
import { playSound, createConfetti } from '@/utils/effects';

const TabooGame = () => {
  const [card, setCard] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    if (!card) {
      setCard(getRandomTabooCard());
    }
  }, [card]);

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

  const handleNewCard = () => {
    setIsFlipping(true);
    playSound('woosh');
    setTimeout(() => {
      setCard(getRandomTabooCard());
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
    handleNewCard();
    playSound('click');
  };

  const celebrate = () => {
    createConfetti(30);
    playSound('success');
    handleNewCard();
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
                <li>One player tries to get their teammates to guess the main word at the top.</li>
                <li>The catch: You cannot say any of the taboo words listed below the main word.</li>
                <li>You cannot use gestures, sounds, or "rhymes with" clues.</li>
                <li>Start the timer and try to get as many correct guesses as possible.</li>
                <li>Click "Correct!" when your team guesses correctly, or "Skip" to move to the next word.</li>
                <li>If you accidentally say a taboo word, you should skip that card!</li>
              </ol>
            </CardContent>
          )}
        </Card>

        <Card className={`w-full shadow-lg ${isFlipping ? 'animate-card-flip' : ''}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-center text-2xl font-bold">
              {card?.word || 'Loading...'}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="flex flex-col gap-2">
              <p className="text-center text-muted-foreground mb-2">Don't say these words:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {card?.tabooWords.map((word, index) => (
                  <Badge key={index} variant="destructive" className="text-sm">
                    {word}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-3 pb-6 flex justify-center gap-4">
            <Button onClick={celebrate} disabled={!isPlaying} variant="default">
              Correct!
            </Button>
            <Button onClick={handleNewCard} disabled={!isPlaying} variant="outline">
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

export default TabooGame;
