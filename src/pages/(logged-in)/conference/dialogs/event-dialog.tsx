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
        <div>
          <p>{event.lecturer}</p>
          <p>{event.topic}</p>
          <a href={event.abstract}>{event.abstract}</a>
        </div>
      )}
    </DialogContent>
  );
}
