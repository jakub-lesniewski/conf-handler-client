import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Session, isSession } from "@/types/Session";
import SessionItem from "./items/session-item";
import EventItem from "./items/event-item";
import SessionDialog from "./dialogs/session-dialog";
import EventDialog from "./dialogs/event-dialog";
import { Event } from "@/types/Event";

type TimelineProps = {
  timeline: (Event | Session)[];
};

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <ol>
      {timeline.map((element) => (
        <Dialog key={element.id}>
          <DialogTrigger asChild>
            <div>
              {isSession(element) ? (
                <SessionItem session={element} />
              ) : (
                <EventItem event={element} />
              )}
            </div>
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
