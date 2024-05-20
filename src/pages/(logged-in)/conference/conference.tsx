import ConferenceHeader from "./conference-header";
import DailyAgenda from "./daily-agenda";
import ConferenceNav from "./conference-nav";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLoaderData } from "react-router-dom";
import { formatDate } from "@/lib/utils";
import { fetchTimeline } from "@/lib/api";
import { Session } from "@/types/Session";
import { Event } from "@/types/Event";

export default function Conference() {
  const [currDate, setCurrDate] = useState<Date>(new Date(2024, 5, 27));
  const [schedule, setSchedule] = useState<(Event | Session)[]>();

  // const schedule = useLoaderData() as (Session | Event)[];

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

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const formattedDate = formatDate(currDate);
        const data = await fetchTimeline(formattedDate);
        console.log(Object.values(data));
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    }

    fetchSchedule();
  }, [currDate]);

  return (
    <Card className="h-screen-[50px] my-4 flex w-[350px] flex-col">
      <ConferenceHeader currDate={currDate} />
      <CardContent className="flex-1 overflow-y-auto">
        {/* <DailyAgenda schedule={schedule} /> */}
      </CardContent>
      <ConferenceNav
        handleSetNextDay={handleSetNextDay}
        handleSetPrevDay={handleSetPrevDay}
      />
    </Card>
  );
}
