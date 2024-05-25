import ConferenceHeader from "./conference-header";
import ConferenceNav from "./conference-nav";
import DailySchedule from "./daily-schedule";
import DailyScheduleSkeleton from "./daily-schedule-skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { fetchTimeline } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/lib/utils";

const tabs: string[] = ["schedule", "bookmarked"];

export default function Conference() {
  const [currDate, setCurrDate] = useState<Date>(new Date(2024, 5, 26));
  const {
    data: schedule,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["schedule", currDate],
    queryFn: () => fetchTimeline(formatDate(currDate)),
  });

  function handleSetNextDay(): void {
    setCurrDate((prevDate) => {
      const nextDay = new Date(prevDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    });
  }

  function handleSetPrevDay(): void {
    setCurrDate((prevDate) => {
      const prevDay = new Date(prevDate);
      prevDay.setDate(prevDay.getDate() - 1);
      return prevDay;
    });
  }

  return (
    <Card className="h-screen-[50px] my-4 flex w-[350px] flex-col">
      <ConferenceHeader currDate={currDate} />
      <Tabs defaultValue={tabs[0]} className="flex-1">
        <TabsList className="w-full">
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab} className="w-1/2">
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={tabs[0]}>
          <CardContent className="overflow-y-auto">
            {isError ? (
              <div>Error fetching data</div>
            ) : isLoading ? (
              <DailyScheduleSkeleton />
            ) : (
              <DailySchedule schedule={schedule} />
            )}
          </CardContent>
        </TabsContent>
        <TabsContent value={tabs[1]}>bookmarked content</TabsContent>
      </Tabs>
      <ConferenceNav
        handleSetNextDay={handleSetNextDay}
        handleSetPrevDay={handleSetPrevDay}
      />
    </Card>
  );
}
