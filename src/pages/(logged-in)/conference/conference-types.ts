export type TimelineElement = Session | Event;

export type Session = {
  id: string;
  name: string;
  duration: string;
  city: string;
  street: string;
  building: string;
  roomNumber: string;
  eventList: (Event | Lecture)[];
};

export type Event = {
  id: string;
  name: string;
  duration: string;
};

export type Lecture = Event & {
  abstract: string;
  lecturer: string;
  topic: string;
};

export function isSession(element: TimelineElement): element is Session {
  return !!(element as Session).roomNumber;
}
