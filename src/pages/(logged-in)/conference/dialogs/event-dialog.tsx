import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useBookmarks } from "@/hooks/useBookmarks";
import { Event } from "@/types/Event";
import { Lecture, isLecture } from "@/types/Lecture";

type EventDialogProps = {
  event: Event | Lecture;
};

export default function EventDialog({ event }: EventDialogProps) {
  const {
    isBookmarked,
    isPendingAdd,
    isPendingRemove,
    handleBookmarkChange,
    restoreBookmarkStatus,
  } = useBookmarks(event);

  const { name, duration, description } = event;

  return (
    <DialogContent
      className="flex flex-col overflow-auto"
      onOpenAutoFocus={restoreBookmarkStatus}
    >
      <DialogHeader className="border-b pb-2 text-start">
        <DialogTitle>{name}</DialogTitle>
        <p className="text-sm">{duration}</p>
      </DialogHeader>
      {isLecture(event) && (
        <>
          <div className="flex flex-col gap-2  border-b pb-2">
            <div className="flex gap-3">
              <p>Lecturer:</p>
              <p className="font-semibold">{event.lecturer}</p>
            </div>
            <div className="flex gap-3">
              <p>Topic:</p>
              <p className="font-semibold">{event.topic}</p>
            </div>
            {event.chairman && (
              <div className="flex gap-2">
                <p>Chairman:</p>
                <p className="font-semibold">{event.chairman}</p>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            {event.abstract && (
              <a href={event.abstract} target="_blank">
                <Button>See the abstract document.</Button>
              </a>
            )}
          </div>
        </>
      )}
      <div className="flex items-center gap-2 self-end">
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
          onCheckedChange={handleBookmarkChange}
        />
      </div>
      {description && <p className="text-sm">{description}</p>}
    </DialogContent>
  );
}
