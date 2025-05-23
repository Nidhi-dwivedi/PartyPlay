
import React from 'react';
import GameLayout from '@/components/GameLayout';
import TabooGame from '@/components/TabooGame';

const TabooPage = () => {
  return (
    <GameLayout title="Taboo Word Game">
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl"></div>
        
        {/* Main content */}
        <div className="relative z-10 animate-fade-in">
          <TabooGame />
        </div>
      </div>
    </GameLayout>
  );
};

export default TabooPage;
