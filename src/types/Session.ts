import { EventElement } from "./Event";
import { TimelineElement } from "./TimelineElement";

export type Session = {
  id: string;
  name: string;
  duration: string; // 12:00 - 14:00
  city: string;
  street: string;
  building: string;
  roomNumber: string;
  eventList: EventElement[];
};

export function isSession(element: TimelineElement): element is Session {
  return "roomNumber" in element;
}
