import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Event } from "@/types/Event";
import { Lecture, isLecture } from "@/types/Lecture";

type EventDialogProps = {
  event: Event | Lecture;
};

export default function EventDialog({ event }: EventDialogProps) {
  return (
    <DialogContent className="flex flex-col">
      <DialogHeader className="text-start">
        <DialogTitle>{event.name}</DialogTitle>
        <p>{event.duration}</p>
      </DialogHeader>
      {isLecture(event) && (
        <>
          <div className="flex gap-2">
            <div className="text-start">
              <p>Lecturer:</p>
              <p>Topic:</p>
            </div>
            <div className="text-end">
              <p className="font-semibold">{event.lecturer}</p>
              <p className="font-semibold">{event.topic}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-start">Abstract:</p>
            <a href={event.abstract} className="text-end text-blue-600">
              {event.abstract}
            </a>
          </div>
        </>
      )}
    </DialogContent>
  );
}
