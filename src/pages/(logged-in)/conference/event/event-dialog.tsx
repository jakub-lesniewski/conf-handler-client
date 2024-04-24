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
      </DialogHeader>
      <p>Chyba powinień być jakiś opis ni?</p>
    </DialogContent>
  );
}
