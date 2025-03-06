
import React, { useState } from 'react';
import { teamMembers, EventType } from '@/utils/mockData';
import Header from '@/components/Header';
import TeamMember from '@/components/TeamMember';
import AnimatedBackground from '@/components/AnimatedBackground';
import { CalendarClock, Coffee, Users, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [filterType, setFilterType] = useState<EventType | 'all'>('all');
  const [date, setDate] = useState<Date>(new Date());
  
  // Filter members based on active filters
  const filteredMembers = filterType === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => 
        member.events.some(event => event.type === filterType)
      );

  // Event type filters with icons
  const eventFilters = [
    { id: 'all', label: 'All Events', icon: CalendarClock },
    { id: 'meeting', label: 'Meetings', icon: Users },
    { id: 'focus', label: 'Focus Time', icon: Brain },
    { id: 'personal', label: 'Personal', icon: Coffee },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Header />
      
      <main className="flex-1 container py-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
              Team Schedule
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-synchro-900 dark:text-synchro-50">Team Availability</h1>
            <p className="text-synchro-500 dark:text-synchro-400 mt-1">View everyone's schedule and availability at a glance</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {eventFilters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.id}
                  variant={filterType === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterType(filter.id as EventType | 'all')}
                  className="transition-all duration-300"
                >
                  <Icon className="mr-1 h-4 w-4" />
                  {filter.label}
                </Button>
              );
            })}
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map(member => (
              <TeamMember key={member.id} member={member} />
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-synchro-500 dark:text-synchro-400">No team members match the current filter.</p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="border-t border-synchro-100 dark:border-synchro-800/40 py-4 text-center text-sm text-synchro-500 dark:text-synchro-400">
        Team Synchro View • {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Index;
