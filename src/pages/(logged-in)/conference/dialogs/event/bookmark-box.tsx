import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useBookmarks } from "@/hooks/useBookmarks";
import { Event } from "@/types/Event";

type BookmarkBoxProps = {
  event: Event;
};

export default function BookmarkBox({ event }: BookmarkBoxProps) {
  const { isBookmarked, isPendingAdd, isPendingRemove, handleBookmarkChange } =
    useBookmarks(event);

  return (
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
  );
}
