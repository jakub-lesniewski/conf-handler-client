import { Lecture } from "./Lecture";

export type EventElement = Event | Lecture;

export type Event = {
  id: string;
  name: string;
  duration: string; // 12:00 - 14:00
};
