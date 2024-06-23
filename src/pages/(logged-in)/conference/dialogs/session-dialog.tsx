import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { isLecture } from "@/types/Lecture";
import { Session } from "@/types/Session";
import SessionLectureItem from "../items/session-lecture-item";
import EventDialog from "./event/event-dialog";
import EventItem from "../items/event-item";

type SessionDialogProps = {
  session: Session;
};

export default function SessionDialog({ session }: SessionDialogProps) {
  const {
    name,
    street,
    city,
    duration,
    building,
    roomNumber,
    eventList,
    chairman,
  } = session;

  return (
    <DialogContent className="flex h-svh flex-col gap-3 overflow-auto">
      <DialogHeader className="space-y-3">
        <DialogTitle className="text-start">{name}</DialogTitle>
        <div className="flex justify-between gap-6 border-b pb-2">
          <div className="text-start text-sm">
            <DialogDescription className="flex justify-between">
              <div className="w-1/2">
                <p>
                  {street}, {city}
                </p>
                <p className="bg-red text-sm text-foreground">{duration}</p>
              </div>
              <div className="w-auto text-foreground">
                <div className="flex gap-3">
                  <p>building:</p>
                  <p>{building}</p>
                </div>
                {roomNumber && (
                  <div className="flex gap-3">
                    <p>room:</p>
                    <p>{roomNumber}</p>
                  </div>
                )}
              </div>
            </DialogDescription>
          </div>
        </div>
        {chairman && (
          <p className="text-left text-base">
            chairman: <span className="font-semibold">{chairman}</span>
          </p>
        )}
      </DialogHeader>

      <ol className="mt-2 overflow-auto rounded-lg border text-sm">
        {eventList.map((element) => (
          <Dialog key={element.id}>
            <DialogTrigger asChild>
              <div>
                {isLecture(element) ? (
                  <SessionLectureItem lecture={element} />
                ) : (
                  <EventItem event={element} />
                )}
              </div>
            </DialogTrigger>

            <EventDialog event={element} />
          </Dialog>
        ))}
      </ol>
    </DialogContent>
  );
}
