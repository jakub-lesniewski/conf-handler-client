import { Event } from "../conference-types";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type EventDialogProps = {
  event: Event;
};

export default function EventDialog({ event }: EventDialogProps) {
  return (
    <DialogContent>
      <DialogHeader className="text-start">
        <DialogTitle>{event.name}</DialogTitle>
        <p>{event.duration}</p>
      </DialogHeader>
      <p>Brief description of event.</p>
    </DialogContent>
  );
}
