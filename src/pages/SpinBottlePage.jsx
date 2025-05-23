
import React from 'react';
import GameLayout from '@/components/GameLayout';
import SpinBottle from '@/components/SpinBottle';

const SpinBottlePage = () => {
  return (
    <GameLayout title="Spin the Bottle">
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-primary/20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-secondary/20 animate-pulse"></div>
        
        {/* Main content */}
        <div className="relative z-10 animate-fade-in">
          <SpinBottle />
        </div>
      </div>
    </GameLayout>
  );
};

export default SpinBottlePage;
