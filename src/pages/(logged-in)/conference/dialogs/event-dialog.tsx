import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Event } from "@/types/Event";

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
