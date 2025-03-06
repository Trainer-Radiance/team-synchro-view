
import React from 'react';
import { timeSlots } from '@/utils/mockData';

interface AvailabilityTimelineProps {
  children?: React.ReactNode;
}

const AvailabilityTimeline: React.FC<AvailabilityTimelineProps> = ({ children }) => {
  return (
    <div className="relative h-28 mt-2 mb-4">
      {/* Time markers */}
      <div className="relative w-full h-full">
        {/* Vertical line */}
        <div className="timeline-line"></div>
        
        {/* Time markers */}
        {timeSlots.map((time, index) => {
          const position = `${(index / (timeSlots.length - 1)) * 100}%`;
          return (
            <React.Fragment key={time}>
              <div 
                className="time-marker" 
                style={{ left: position }}
                data-time={time}
              ></div>
              <div 
                className="time-label" 
                style={{ left: position }}
              >
                {time}
              </div>
            </React.Fragment>
          );
        })}
        
        {/* Current time indicator */}
        <div className="absolute w-px h-full bg-primary/70 left-[30%] z-20">
          <div className="absolute -top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute -bottom-6 -translate-x-1/2 text-xs font-mono text-primary">Now</div>
        </div>
        
        {/* Render event cards as children */}
        <div className="absolute inset-x-0 top-8 h-20 overflow-visible">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityTimeline;
