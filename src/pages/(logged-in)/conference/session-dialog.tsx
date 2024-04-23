import { Session } from "./conference-types";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type SessionDialogProps = {
  session: Session;
};

export default function SessionDialog({ session }: SessionDialogProps) {
  return (
    <DialogContent>
      <DialogHeader className="grid grid-cols-2">
        <div className="space-y-2 text-start">
          <DialogTitle>{session.name}</DialogTitle>
          <DialogDescription>
            {session.street}, {session.city}
          </DialogDescription>
          <p>{session.duration}</p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-sm text-start w-[150px]">
            <div>
              <p>building:</p>
              <p>room:</p>
            </div>
            <div>
              <p className="font-semibold tracking-wide">{session.building}</p>
              <p className="font-semibold tracking-wide">{session.roomNumber}</p>
            </div>
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  );
}
