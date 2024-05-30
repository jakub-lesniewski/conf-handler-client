import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/AuthContext";
import { addBookmark, removeBookmark } from "@/lib/api";
import { Event } from "@/types/Event";
import { Lecture, isLecture } from "@/types/Lecture";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type EventDialogProps = {
  event: Event | Lecture;
};

export default function EventDialog({ event }: EventDialogProps) {
  const { addBookmarkedEvent, removeBookmarkedEvent, isBookmarkedEvent } =
    useAuth();
  const queryClient = useQueryClient();
  const [isBookmarked, setIsBookmarked] = useState<boolean>(
    isBookmarkedEvent(event.id),
  );

  const { loggedUser } = useAuth();

  const { mutateAsync: addBookmarkMutation, isPending: isPendingAdd } =
    useMutation({
      mutationFn: async () => {
        if (loggedUser) {
          await addBookmark(loggedUser.id, event.id);
        }
      },
      onSuccess: () => {
        setIsBookmarked(true);
        addBookmarkedEvent(event.id);
        queryClient.invalidateQueries({ queryKey: ["bookmarkedSchedule"] });
      },
    });

  const { mutateAsync: removeBookmarkMutation, isPending: isPendingRemove } =
    useMutation({
      mutationFn: async () => {
        if (loggedUser) {
          await removeBookmark(loggedUser.id, event.id);
        }
      },
      onSuccess: () => {
        setIsBookmarked(false);
        removeBookmarkedEvent(event.id);
        queryClient.invalidateQueries({ queryKey: ["bookmarkedSchedule"] });
      },
    });

  return (
    <DialogContent
      className="flex flex-col"
      onOpenAutoFocus={() => setIsBookmarked(isBookmarkedEvent(event.id))}
    >
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
      <div className="flex items-center gap-2 self-end text-base">
        <Label htmlFor="event" className="font-semibold">
          {isPendingAdd
            ? "Adding..."
            : isPendingRemove
              ? "Removing..."
              : isBookmarked
                ? "Bookmarked"
                : "Bookmark"}
        </Label>
        <Checkbox
          id="event"
          checked={isBookmarked}
          disabled={isPendingAdd || isPendingRemove}
          onCheckedChange={(checked) => {
            if (checked) {
              addBookmarkMutation();
            } else {
              removeBookmarkMutation();
            }
          }}
        />
      </div>
    </DialogContent>
  );
}
