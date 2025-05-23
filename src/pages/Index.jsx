
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { 
  Dices, MessageCircleQuestion, Laugh, Scale, Wine, 
  Theater, PenTool
} from 'lucide-react';

const GameCard = ({ title, description, icon, to }) => (
  <Card className="p-6 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
    <Link to={to} className="flex flex-col items-center text-center gap-4">
      <div className="rounded-full bg-primary/10 p-4">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Link>
  </Card>
);

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <header className="py-12 bg-gradient-to-r from-primary/20 to-secondary/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              PartyPlay
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              The Ultimate Game Generator
            </p>
          </div>
        </header>

        <main className="flex-1 container mx-auto py-12 px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <GameCard
              title="Taboo Word"
              description="Describe the word without using taboo words"
              icon={<PenTool className="h-6 w-6 text-primary" />}
              to="/taboo"
            />
            
            <GameCard
              title="Truth or Dare"
              description="Classic game with varying difficulty levels"
              icon={<MessageCircleQuestion className="h-6 w-6 text-primary" />}
              to="/truth-or-dare"
            />
            
            <GameCard
              title="Never Have I Ever"
              description="Discover what others have done"
              icon={<Dices className="h-6 w-6 text-primary" />}
              to="/never-have-i"
            />
            
            <GameCard
              title="Would You Rather"
              description="Choose between two difficult options"
              icon={<Scale className="h-6 w-6 text-primary" />}
              to="/would-you-rather"
            />
            
            <GameCard
              title="Spin the Bottle"
              description="Random challenges when the bottle points to you"
              icon={<Wine className="h-6 w-6 text-primary" />}
              to="/spin-bottle"
            />
            
            <GameCard
              title="Charades"
              description="Act it out for your team to guess"
              icon={<Theater className="h-6 w-6 text-primary" />}
              to="/charades"
            />
          </div>
        </main>

        <footer className="py-8 border-t">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground">
              PartyPlay – The Ultimate Game Generator
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
