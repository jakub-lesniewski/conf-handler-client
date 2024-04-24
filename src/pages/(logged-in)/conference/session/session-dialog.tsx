import { Session } from "../conference-types";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SessionDialogProps = {
  session: Session;
};

export default function SessionDialog({
  session: { name, street, city, duration, building, roomNumber, eventList },
}: SessionDialogProps) {
  return (
    <DialogContent className="max-h-svh">
      <DialogHeader className="space-y-3">
        <DialogTitle className="text-start">{name}</DialogTitle>
        <div className="flex gap-6">
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
                <p className="font-semibold tracking-wide">{building}</p>
                <p className="font-semibold tracking-wide">{roomNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogHeader>

      <ol className="mt-2 rounded-lg border text-sm">
        {eventList.map((element) => (
          <li
            key={element.id}
            className="flex cursor-pointer items-center justify-between border-b px-4 py-2 hover:bg-secondary"
          >
            <p className="w-1/2 text-start">{element.name}</p>
            <p className="w-1/2 text-end">{element.duration}</p>
          </li>
        ))}
      </ol>
    </DialogContent>
  );
}
