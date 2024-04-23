import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TimelineElement, isSession } from "./conference-types";
import EventItem from "./event-item";
import SessionItem from "./session-item";
import SessionDialog from "./session-dialog";
import EventDialog from "./event-dialog";

type TimelineProps = {
  timeline: TimelineElement[];
};

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <ol>
      {timeline.map((element) => (
        <Dialog key={element.id}>
          <DialogTrigger asChild>
            <li className="border-b px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-secondary rounded-md">
              {isSession(element) ? <SessionItem session={element} /> : <EventItem event={element} />}
            </li>
          </DialogTrigger>

          {isSession(element) ? <SessionDialog session={element} /> : <EventDialog event={element} />}
        </Dialog>
      ))}
    </ol>
  );
}
