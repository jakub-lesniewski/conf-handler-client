import { Session } from "./conference-types";
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
    <DialogContent>
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

      <div className="mt-2 flex border-t pt-2 text-sm">
        <ol className="w-1/2 space-y-2">
          {eventList.map((element) => (
            <li
              key={element.id}
              className="cursor-pointer rounded-lg px-2 py-1"
            >
              {element.name}
            </li>
          ))}
        </ol>

        <section className="w-1/2 space-y-1">
          <p>name</p>
          <p>duration</p>
          <p>abstract</p>
          <p>lecturer</p>
          <p>topic</p>
        </section>
      </div>
    </DialogContent>
  );
}
