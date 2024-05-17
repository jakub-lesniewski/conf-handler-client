import ConferenceHeader from "./conference-header";
import Timeline from "./timeline";
import ConferenceFooter from "./conference-footer";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLoaderData } from "react-router-dom";
import { TimelineElement } from "@/types/TimelineElement";

export default function Conference() {
  const [currDate, setCurrDate] = useState<Date>(new Date());

  const timeline = useLoaderData() as TimelineElement[];

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
        <Timeline timeline={timeline} />
      </CardContent>
      <ConferenceFooter
        handleSetPrevDay={handleSetPrevDay}
        handleSetNextDay={handleSetNextDay}
      />
    </Card>
  );
}
