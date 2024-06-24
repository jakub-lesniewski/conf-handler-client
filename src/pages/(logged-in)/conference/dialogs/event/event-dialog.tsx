import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBookmarks } from "@/hooks/useBookmarks";
import { Event } from "@/types/Event";
import { Lecture, isLecture } from "@/types/Lecture";
import LectureBox from "./lecture-box";
import BookmarkBox from "./bookmark-box";
import MenuBox from "./menu-box";

type EventDialogProps = {
  event: Event | Lecture;
};

export default function EventDialog({ event }: EventDialogProps) {
  const { name, duration, description, menu } = event;
  const { restoreBookmarkStatus } = useBookmarks(event);

  return (
    <DialogContent
      className="flex max-h-svh flex-col overflow-auto"
      onOpenAutoFocus={restoreBookmarkStatus}
    >
      <DialogHeader className="border-b pb-2 text-start">
        <DialogTitle>{name}</DialogTitle>
        <p className="text-sm">{duration}</p>
      </DialogHeader>

      {isLecture(event) && <LectureBox lecture={event} />}

      <BookmarkBox event={event} />

      {description && (
        <div
          className="max-h-[80svh] overflow-auto border-y border-t py-2 text-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {menu && <MenuBox menu={menu} />}
    </DialogContent>
  );
}
