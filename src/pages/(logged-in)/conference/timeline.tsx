import { TimelineElement, isSession } from "./conference-types";
import EventItem from "./event-item";
import SessionItem from "./session-item";

type TimelineProps = {
  timeline: TimelineElement[];
};

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <ol>
      {timeline.map((element) => (
        <li
          key={element.id}
          className="border-b p-2 cursor-pointer flex justify-between items-center hover:bg-secondary rounded-md"
        >
          {isSession(element) ? <SessionItem session={element} /> : <EventItem event={element} />}
        </li>
      ))}
    </ol>
  );
}
