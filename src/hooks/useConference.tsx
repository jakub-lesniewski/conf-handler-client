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

  function handleSetNextDay(): void {
    setCurrDate((prevDate) => {
      const nextDay = new Date(prevDate);
      nextDay.setDate(nextDay.getDate() + 1);
      if (nextDay <= endDate) {
        return nextDay;
      } else {
        toast.error("You are already at the last day of the conference");
        return prevDate;
      }
    });
  }

  function handleSetPrevDay(): void {
    setCurrDate((prevDate) => {
      const prevDay = new Date(prevDate);
      prevDay.setDate(prevDay.getDate() - 1);
      if (prevDay >= startDate) {
        return prevDay;
      } else {
        toast.error("You are already at the first day of the conference");
        return prevDate;
      }
    });
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
