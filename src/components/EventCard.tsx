
import React from 'react';
import { Event, getEventColor } from '@/utils/mockData';

interface EventCardProps {
  event: Event;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className = '' }) => {
  const colorClasses = getEventColor(event.type);
  const EventIcon = event.icon;
  
  // Calculate position and width based on time
  // This is a simple implementation - in a real app, you'd want more sophisticated logic
  const getTimePosition = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours + minutes / 60;
  };
  
  const startPosition = getTimePosition(event.start);
  const endPosition = getTimePosition(event.end);
  const startHour = 8; // Timeline starts at 8 AM
  const durationHours = endPosition - startPosition;
  
  // Calculate left and width percentages
  const left = ((startPosition - startHour) / 10) * 100; // 10 hours total in timeline (8 AM - 6 PM)
  const width = (durationHours / 10) * 100;
  
  return (
    <div 
      className={`event-card ${colorClasses} animate-scale-in ${className}`}
      style={{
        position: 'absolute',
        left: `${left}%`,
        width: `${width}%`,
        maxWidth: 'calc(100% - 10px)',
        animationDelay: `${(startPosition - 8) * 50}ms`
      }}
    >
      <div className="flex items-start space-x-2">
        <div className="bg-white dark:bg-synchro-800 bg-opacity-50 p-1.5 rounded-lg">
          <EventIcon className="w-3.5 h-3.5" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium truncate">{event.title}</h4>
          {event.description && (
            <p className="text-xs opacity-80 truncate">{event.description}</p>
          )}
          <div className="text-xs mt-1 opacity-70 font-mono">
            {event.start} - {event.end}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
