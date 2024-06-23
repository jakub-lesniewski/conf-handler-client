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
      className="flex flex-col overflow-auto"
      onOpenAutoFocus={restoreBookmarkStatus}
    >
      <DialogHeader className="border-b pb-2 text-start">
        <DialogTitle>{name}</DialogTitle>
        <p className="text-sm">{duration}</p>
      </DialogHeader>

      {isLecture(event) && <LectureBox lecture={event} />}

      {menu && <MenuBox menu={menu} />}

      <BookmarkBox event={event} />
      {description && <p className="text-sm">{description}</p>}
    </DialogContent>
  );
}
