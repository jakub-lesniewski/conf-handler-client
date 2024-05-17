import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TimelineElement } from "@/types/TimelineElement";
import { isSession } from "@/types/Session";
import SessionItem from "./items/session-item";
import EventItem from "./items/event-item";
import SessionDialog from "./dialogs/session-dialog";
import EventDialog from "./dialogs/event-dialog";

type TimelineProps = {
  timeline: TimelineElement[];
};

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <ol>
      {timeline.map((element) => (
        <Dialog key={element.id}>
          <DialogTrigger asChild>
            <li className="flex cursor-pointer items-center justify-between border-b px-4 py-2 shadow-sm hover:bg-secondary">
              {isSession(element) ? (
                <SessionItem session={element} />
              ) : (
                <EventItem event={element} />
              )}
            </li>
          </DialogTrigger>

          {isSession(element) ? (
            <SessionDialog session={element} />
          ) : (
            <EventDialog event={element} />
          )}
        </Dialog>
      ))}
    </ol>
  );
}
