import { Event } from "./Event";
import { Lecture } from "./Lecture";

export type TimelineElement = Session | Event;

export type Session = {
  id: string;
  name: string;
  duration: string; // 12:00 - 14:00
  chairman?: string;
  city: string;
  street: string;
  building: string;
  roomNumber?: string;
  eventList: (Event | Lecture)[];
};

export function isSession(element: TimelineElement): element is Session {
  return "roomNumber" in element;
}
