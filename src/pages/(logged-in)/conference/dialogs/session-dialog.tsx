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
import EventDialog from "./event-dialog";
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
    <DialogContent className="flex h-[600px] flex-col gap-3">
      <DialogHeader className="space-y-3">
        <DialogTitle className="text-start">{name}</DialogTitle>
        <div className="flex justify-between gap-6">
          <div className="text-start text-sm">
            <DialogDescription>
              {street}, {city}
            </DialogDescription>
            <p>{duration}</p>
            {chairman && (
              <p className="mt-2 text-base">
                chairman: <span className="font-semibold">{chairman}</span>
              </p>
            )}
          </div>
          <div>
            <div className="flex w-[150px] gap-4 text-start text-sm">
              <div>
                <p>building:</p>
                {roomNumber && <p>room:</p>}
              </div>
              <div>
                <p className="text-end font-semibold tracking-wide">
                  {building}
                </p>
                {roomNumber && (
                  <p className="text-end font-semibold tracking-wide">
                    {roomNumber}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
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
