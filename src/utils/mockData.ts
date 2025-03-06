
import { CalendarClock, Coffee, Users, Brain } from "lucide-react";

export type EventType = 'meeting' | 'personal' | 'focus' | 'offwork';

export interface Event {
  id: string;
  title: string;
  description?: string;
  type: EventType;
  start: string;
  end: string;
  icon: React.ElementType;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'available' | 'busy' | 'away' | 'offline';
  events: Event[];
}

export const timeSlots = [
  '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
  '15:00', '16:00', '17:00', '18:00'
];

export const getEventColor = (type: EventType): string => {
  switch (type) {
    case 'meeting': return 'bg-event-meeting border-purple-300 text-purple-800';
    case 'personal': return 'bg-event-personal border-orange-300 text-orange-800';
    case 'focus': return 'bg-event-focus border-blue-300 text-blue-800';
    case 'offwork': return 'bg-event-offwork border-green-300 text-green-800';
    default: return 'bg-synchro-100 border-synchro-200 text-synchro-800';
  }
};

export const getEventIcon = (type: EventType) => {
  switch (type) {
    case 'meeting': return Users;
    case 'personal': return Coffee;
    case 'focus': return Brain;
    case 'offwork': return CalendarClock;
    default: return CalendarClock;
  }
};

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop',
    status: 'available',
    events: [
      {
        id: 'e1',
        title: 'UI Design Review',
        description: 'Review latest interface mockups with the team',
        type: 'meeting',
        start: '9:00',
        end: '10:30',
        icon: Users
      },
      {
        id: 'e2',
        title: 'Lunch Break',
        type: 'personal',
        start: '12:00',
        end: '13:00',
        icon: Coffee
      },
      {
        id: 'e3',
        title: 'Design Sprint',
        description: 'Working on new feature concepts',
        type: 'focus',
        start: '14:00',
        end: '16:30',
        icon: Brain
      }
    ]
  },
  {
    id: '2',
    name: 'Samantha Lee',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop',
    status: 'busy',
    events: [
      {
        id: 'e4',
        title: 'Code Review',
        description: 'Review pull requests with senior developers',
        type: 'meeting',
        start: '8:30',
        end: '9:30',
        icon: Users
      },
      {
        id: 'e5',
        title: 'Implementation Work',
        description: 'Working on the new dashboard components',
        type: 'focus',
        start: '10:00',
        end: '12:00',
        icon: Brain
      },
      {
        id: 'e6',
        title: 'Lunch',
        type: 'personal',
        start: '12:00',
        end: '13:00',
        icon: Coffee
      },
      {
        id: 'e7',
        title: 'Team Sync',
        type: 'meeting',
        start: '15:00',
        end: '16:00',
        icon: Users
      }
    ]
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
    status: 'away',
    events: [
      {
        id: 'e8',
        title: 'Stakeholder Meeting',
        description: 'Discussing product roadmap with executives',
        type: 'meeting',
        start: '9:00',
        end: '10:30',
        icon: Users
      },
      {
        id: 'e9',
        title: 'Product Planning',
        type: 'focus',
        start: '11:00',
        end: '13:00',
        icon: Brain
      },
      {
        id: 'e10',
        title: 'One-on-ones',
        description: 'Individual meetings with team members',
        type: 'meeting',
        start: '14:00',
        end: '17:00',
        icon: Users
      }
    ]
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    role: 'UX Researcher',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=250&auto=format&fit=crop',
    status: 'available',
    events: [
      {
        id: 'e11',
        title: 'User Testing',
        description: 'Conducting usability tests with participants',
        type: 'focus',
        start: '8:30',
        end: '11:30',
        icon: Brain
      },
      {
        id: 'e12',
        title: 'Lunch',
        type: 'personal',
        start: '12:00',
        end: '13:00',
        icon: Coffee
      },
      {
        id: 'e13',
        title: 'Research Analysis',
        type: 'focus',
        start: '13:30',
        end: '15:30',
        icon: Brain
      },
      {
        id: 'e14',
        title: 'Team Debrief',
        type: 'meeting',
        start: '16:00',
        end: '17:00',
        icon: Users
      }
    ]
  },
  {
    id: '5',
    name: 'David Kim',
    role: 'Backend Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop',
    status: 'offline',
    events: [
      {
        id: 'e15',
        title: 'Out of Office',
        description: 'PTO - Will be back tomorrow',
        type: 'offwork',
        start: '8:00',
        end: '18:00',
        icon: CalendarClock
      }
    ]
  }
];
