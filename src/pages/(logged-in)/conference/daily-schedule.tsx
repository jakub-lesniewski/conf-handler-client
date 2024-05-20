import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Session, isSession } from "@/types/Session";
import { Event } from "@/types/Event";
import SessionItem from "./items/session-item";
import EventItem from "./items/event-item";
import SessionDialog from "./dialogs/session-dialog";
import EventDialog from "./dialogs/event-dialog";
import SleepingCat from "@/components/sleeping-cat";

type DailyScheduleProps = {
  schedule: (Event | Session)[];
};

export default function DailySchedule({ schedule }: DailyScheduleProps) {
  return (
    <ol>
      {schedule.length === 0 ? (
        <>
          <p className="p-2 text-center text-muted-foreground">
            No events or sessions scheduled for today.
          </p>
          <SleepingCat />
        </>
      ) : (
        schedule.map((element) => (
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
        ))
      )}
    </ol>
  );
}
