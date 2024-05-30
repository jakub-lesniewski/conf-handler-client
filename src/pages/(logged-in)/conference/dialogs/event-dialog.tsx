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

  return (
    <DialogContent
      className="flex flex-col"
      onOpenAutoFocus={restoreBookmarkStatus}
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
          onCheckedChange={handleBookmarkChange}
        />
      </div>
    </DialogContent>
  );
}
