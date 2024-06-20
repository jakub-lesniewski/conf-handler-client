import { Event } from "./Event";

export type Lecture = Event & {
  abstract: string;
  lecturer: string;
  topic: string;
  chairman?: string;
};

export function isLecture(element: Event): element is Lecture {
  return "abstract" in element && "lecturer" in element && "topic" in element;
}
