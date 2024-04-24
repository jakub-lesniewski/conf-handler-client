export type TimelineElement = Session | Event;

export type Session = {
  id: string;
  name: string;
  duration: string;
  city: string;
  street: string;
  building: string;
  roomNumber: string;
  eventList: EventElement[];
};

export type EventElement = Event | Lecture;

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
  return "roomNumber" in element;
}

export function isLecture(element: EventElement): element is Lecture {
  return "abstract" in element && "lecturer" in element && "topic" in element;
}
