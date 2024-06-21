import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useState } from "react";
import { UserEvent } from "@/types/UserEvent";

export default function Sidebar() {
  const navigate = useNavigate();
  const { loggedUser, logout } = useAuth();
  const [openEvent, setOpenEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<UserEvent>(null);

  function handleSelectEvent(event: UserEvent) {
    setOpenEvent(true);
    setSelectedEvent(event);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon">
          <Menu className="cursor-pointer text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-svh flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle>{`Welcome ${loggedUser?.name} ${loggedUser?.surname}`}</SheetTitle>
        </SheetHeader>

        <section className="h-auto space-y-1">
          <h2 className="font-semibold">Events I'm involved in:</h2>
          <ol className="flex flex-col gap-2 overflow-auto rounded-md border">
            {loggedUser?.involvedInEvents.map((event, index) => (
              <li
                key={index}
                onClick={() => handleSelectEvent(event)}
                className="cursor-pointer border-b p-2 pt-0 first:pt-2 last:border-none"
              >
                {event.name}
              </li>
            ))}
          </ol>
        </section>

        <Dialog open={openEvent} onOpenChange={setOpenEvent}>
          {selectedEvent && (
            <DialogContent className="flex flex-col gap-2">
              <DialogHeader className="text-start">
                <DialogTitle>{selectedEvent.name}</DialogTitle>
                <DialogDescription className="flex flex-col">
                  <span>{selectedEvent.duration}</span>{" "}
                  <span>{selectedEvent.date}</span>
                </DialogDescription>
              </DialogHeader>

              <p>
                Your role is{" "}
                <span className="font-semibold">{selectedEvent.function}</span>
              </p>
              <p></p>
            </DialogContent>
          )}
        </Dialog>

        <Button
          onClick={() => {
            logout();
            navigate("/");
          }}
          variant="destructive"
          className="mt-auto font-semibold"
        >
          logout
        </Button>
      </SheetContent>
    </Sheet>
  );
}
