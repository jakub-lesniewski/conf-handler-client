import ConferenceHeader from "./conference-header";
import ConferenceNav from "./conference-nav";
import DailySchedule from "./daily-schedule";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { fetchTimeline } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import DailyScheduleSkeleton from "./daily-schedule-skeleton";

export default function Conference() {
  const [currDate, setCurrDate] = useState<Date>(new Date(2024, 5, 27));
  const {
    data: schedule,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["schedule", currDate],
    queryFn: () => fetchTimeline(formatDate(currDate)),
  });

  function handleSetNextDay(): void {
    const nextDay = new Date(currDate);
    nextDay.setDate(nextDay.getDate() + 1);

    setCurrDate(nextDay);
  }

  function handleSetPrevDay(): void {
    const prevDay = new Date(currDate);
    prevDay.setDate(prevDay.getDate() - 1);

    setCurrDate(prevDay);
  }

  return (
    <Card className="h-screen-[50px] my-4 flex w-[350px] flex-col">
      <ConferenceHeader currDate={currDate} />
      <CardContent className="flex-1 overflow-y-auto">
        {isError ? (
          <div>Error fetching data</div>
        ) : isLoading ? (
          <DailyScheduleSkeleton />
        ) : (
          <DailySchedule schedule={schedule} />
        )}
      </CardContent>
      <ConferenceNav
        handleSetNextDay={handleSetNextDay}
        handleSetPrevDay={handleSetPrevDay}
      />
    </Card>
  );
}
