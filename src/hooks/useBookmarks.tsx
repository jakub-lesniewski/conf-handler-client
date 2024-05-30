import { useAuth } from "@/lib/AuthContext";
import { addBookmark, removeBookmark } from "@/lib/api";
import { Event } from "@/types/Event";
import { Lecture } from "@/types/Lecture";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function useBookmarks(event: Event | Lecture) {
  const {
    loggedUser,
    addBookmarkedEvent,
    removeBookmarkedEvent,
    isBookmarkedEvent,
  } = useAuth();

  const queryClient = useQueryClient();

  const [isBookmarked, setIsBookmarked] = useState<boolean>(
    isBookmarkedEvent(event.id),
  );

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

  function handleBookmarkChange(checked: boolean) {
    if (checked) {
      addBookmarkMutation();
    } else {
      removeBookmarkMutation();
    }
  }

  function restoreBookmarkStatus() {
    setIsBookmarked(isBookmarkedEvent(event.id));
  }

  return {
    isBookmarked,
    isPendingAdd,
    isPendingRemove,
    handleBookmarkChange,
    restoreBookmarkStatus,
  };
}
