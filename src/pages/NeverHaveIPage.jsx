
import React from 'react';
import GameLayout from '@/components/GameLayout';
import NeverHaveI from '@/components/NeverHaveI';

const NeverHaveIPage = () => {
  return (
    <GameLayout title="Never Have I Ever">
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl"></div>
        
        {/* Main content */}
        <div className="relative z-10 animate-fade-in">
          <NeverHaveI />
        </div>
      </div>
    </GameLayout>
  );
};

export default NeverHaveIPage;
