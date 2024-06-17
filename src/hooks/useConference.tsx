import { useAuth } from "@/lib/AuthContext";
import { fetchBookmarkedSchedule, fetchSchedule } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function useConference(startDate: Date, endDate: Date) {
  const { loggedUser } = useAuth();
  const [currDate, setCurrDate] = useState<Date>(startDate);

  const {
    data: schedule,
    isLoading: isScheduleLoading,
    isError: isScheduleError,
  } = useQuery({
    queryKey: ["schedule", currDate],
    queryFn: () => fetchSchedule(formatDate(currDate)),
  });

  const {
    data: bookmarkedSchedule,
    isLoading: isBookmarkedScheduleLoading,
    isError: isBookmarkedScheduleError,
  } = useQuery({
    queryKey: ["bookmarkedSchedule", currDate],
    queryFn: () => {
      if (loggedUser) {
        return fetchBookmarkedSchedule(loggedUser.id, formatDate(currDate));
      }
    },
  });

  function handleSetNextDay() {
    const nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate() + 1);
    if (nextDate < endDate) {
      setCurrDate(nextDate);
    } else {
      toast.info("You have reached the end of the conference");
    }
  }

  function handleSetPrevDay() {
    const prevDate = new Date(currDate);
    prevDate.setDate(currDate.getDate() - 1);
    if (prevDate > startDate) {
      setCurrDate(prevDate);
    } else {
      toast.info("You have reached the beginning of the conference");
    }
  }

  return {
    currDate,
    schedule,
    bookmarkedSchedule,
    isScheduleError,
    isScheduleLoading,
    isBookmarkedScheduleLoading,
    isBookmarkedScheduleError,
    handleSetNextDay,
    handleSetPrevDay,
  };
}
