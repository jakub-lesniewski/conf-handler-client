import { useAuth } from "@/lib/AuthContext";
import { fetchBookmarkedSchedule, fetchSchedule } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

//
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
    // TODO
    if (endDate === currDate) {
      return;
    }

    setCurrDate((prevDate) => {
      const nextDay = new Date(prevDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    });
  }

  function handleSetPrevDay(): void {
    // TODO
    if (startDate === currDate) {
      return;
    }

    setCurrDate((prevDate) => {
      const prevDay = new Date(prevDate);
      prevDay.setDate(prevDay.getDate() - 1);
      return prevDay;
    });
  }

  return {
    currDate,
    schedule,
    isScheduleError,
    isScheduleLoading,
    bookmarkedSchedule,
    isBookmarkedScheduleLoading,
    isBookmarkedScheduleError,
    handleSetNextDay,
    handleSetPrevDay,
  };
}
