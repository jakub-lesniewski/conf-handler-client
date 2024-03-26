export type Event = {
  id: string;
  timeStart: string;
  timeEnd: string;
  name: string;
  type: string;
};

export type Session = {
  id: string;
  timeStart: string;
  timeEnd: string;
  room: string;
  name: string;
  events: Event[];
};

export const sessions: Session[] = [
  {
    id: "1",
    timeStart: "9:00",
    timeEnd: "12:00",
    room: "Main Hall",
    name: "Opening Keynote",
    events: [
      {
        id: "1",
        timeStart: "9:00",
        timeEnd: "10:00",
        name: "Welcome Address",
        type: "Keynote",
      },
      {
        id: "2",
        timeStart: "10:00",
        timeEnd: "12:00",
        name: "Keynote Speaker",
        type: "Keynote",
      },
    ],
  },
  {
    id: "2",
    timeStart: "10:30",
    timeEnd: "12:00",
    room: "Room A",
    name: "Technical Sessions",
    events: [
      {
        id: "3",
        timeStart: "10:30",
        timeEnd: "11:15",
        name: "React Best Practices",
        type: "Technical",
      },
      {
        id: "4",
        timeStart: "11:15",
        timeEnd: "12:00",
        name: "State Management in Redux",
        type: "Technical",
      },
    ],
  },
];
