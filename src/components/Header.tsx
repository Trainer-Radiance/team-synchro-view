
import React from 'react';
import { Calendar, Search, Settings, BellRing } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="glass sticky top-0 z-50 backdrop-blur-lg px-6 py-3 flex items-center justify-between border-b border-synchro-100 dark:border-synchro-800/40">
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
          <Calendar className="w-5 h-5" />
        </div>
        <h1 className="text-xl font-semibold text-synchro-900 dark:text-synchro-50">Team Synchro</h1>
      </div>
      
      <div className="flex items-center">
        <div className="relative mr-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-synchro-400" />
          </div>
          <input
            type="search"
            className="block w-full p-2 pl-10 text-sm bg-synchro-50 dark:bg-synchro-900 border border-synchro-200 dark:border-synchro-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Search team members..."
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-synchro-500 hover:text-synchro-700 dark:text-synchro-400 dark:hover:text-synchro-200">
            <BellRing className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-synchro-500 hover:text-synchro-700 dark:text-synchro-400 dark:hover:text-synchro-200">
            <Settings className="w-5 h-5" />
          </Button>
          <Button className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            Today
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
