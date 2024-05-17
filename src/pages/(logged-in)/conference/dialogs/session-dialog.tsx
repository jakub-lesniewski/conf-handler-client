import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { isLecture } from "@/types/Lecture";
import { Session } from "@/types/Session";
import SessionLectureItem from "../items/session-lecture-item";
import SessionEventItem from "../items/session-event-item";

type SessionDialogProps = {
  session: Session;
};

export default function SessionDialog({
  session: { name, street, city, duration, building, roomNumber, eventList },
}: SessionDialogProps) {
  return (
    <DialogContent className="flex h-svh flex-col gap-3">
      <DialogHeader className="space-y-3">
        <DialogTitle className="text-start">{name}</DialogTitle>
        <div className="flex justify-between gap-6">
          <div className="text-start text-sm">
            <DialogDescription>
              {street}, {city}
            </DialogDescription>
            <p>{duration}</p>
          </div>
          <div>
            <div className="flex w-[150px] gap-4 text-start text-sm">
              <div>
                <p>building:</p>
                <p>room:</p>
              </div>
              <div>
                <p className="text-end font-semibold tracking-wide">
                  {building}
                </p>
                <p className="text-end font-semibold tracking-wide">
                  {roomNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogHeader>

      <ol className="mt-2 overflow-auto rounded-lg border text-sm">
        {eventList.map((element) =>
          isLecture(element) ? (
            <SessionLectureItem key={element.id} lecture={element} />
          ) : (
            <SessionEventItem key={element.id} event={element} />
          ),
        )}
      </ol>
    </DialogContent>
  );
}
