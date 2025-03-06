
import React from 'react';
import { TeamMember as TeamMemberType } from '@/utils/mockData';
import AvailabilityTimeline from './AvailabilityTimeline';
import EventCard from './EventCard';

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'busy': return 'bg-red-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="glass-dim rounded-xl p-4 mb-4 transition-all duration-300 hover:glass animate-fade-up">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img 
              src={member.avatar} 
              alt={member.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-synchro-800"
              loading="lazy"
            />
            <span 
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-synchro-800 ${getStatusColor(member.status)}`}
            />
          </div>
          <div>
            <h3 className="font-medium text-synchro-900 dark:text-synchro-50">{member.name}</h3>
            <p className="text-sm text-synchro-500 dark:text-synchro-400">{member.role}</p>
          </div>
        </div>
        
        <div>
          <span className="text-xs px-2 py-1 rounded-full bg-synchro-100 dark:bg-synchro-800 text-synchro-600 dark:text-synchro-300">
            {member.status === 'available' ? 'Available' : 
             member.status === 'busy' ? 'In a meeting' : 
             member.status === 'away' ? 'Away' : 'Offline'}
          </span>
        </div>
      </div>
      
      <AvailabilityTimeline>
        {member.events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </AvailabilityTimeline>
    </div>
  );
};

export default TeamMember;
