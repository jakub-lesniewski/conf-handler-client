import { useAuth } from "@/lib/AuthContext";
import { fetchBookmarkedSchedule, fetchSchedule } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function useConference(startDate: Date, endDate: Date) {
  const today = new Date();
  const initialDate =
    today >= startDate && today <= endDate ? today : startDate;
  const { loggedUser } = useAuth();
  const [currDate, setCurrDate] = useState<Date>(initialDate);

  const {
    data: schedule,
    isLoading: isScheduleLoading,
    isError: isScheduleError,
  } = useQuery({
    queryKey: ["schedule", currDate],
    queryFn: () => fetchSchedule(formatDate(initialDate)),
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
    const nextDay = new Date(currDate);
    nextDay.setDate(nextDay.getDate() + 1);
    if (nextDay <= endDate) {
      setCurrDate(nextDay);
    } else {
      toast.info("You are already at the last day of the conference.");
    }
  }

  function handleSetPrevDay() {
    const prevDay = new Date(currDate);
    prevDay.setDate(prevDay.getDate() - 1);
    if (prevDay >= startDate) {
      setCurrDate(prevDay);
    } else {
      toast.info("You are already at the first day of the conference.");
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
