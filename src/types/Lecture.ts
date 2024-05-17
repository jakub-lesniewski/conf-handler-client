import { Event, EventElement } from "./Event";

export type Lecture = Event & {
  abstract: string;
  lecturer: string;
  topic: string;
};

export function isLecture(element: EventElement): element is Lecture {
  return "abstract" in element && "lecturer" in element && "topic" in element;
}
