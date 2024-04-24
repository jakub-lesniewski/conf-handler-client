import Timeline from "./timeline";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLoaderData } from "react-router-dom";
import { TimelineElement } from "./conference-types";

import ConferenceHeader from "./conference-header";
import ConferenceFooter from "./conference-footer";

export default function Conference() {
  const [currDate, setCurrDate] = useState<Date>(new Date());

  const timeline = useLoaderData() as TimelineElement[];

  function handleSetNextDay() {
    const nextDay = new Date(currDate);
    nextDay.setDate(nextDay.getDate() + 1);

    setCurrDate(nextDay);
  }

  function handleSetPrevDay() {
    const prevDay = new Date(currDate);
    prevDay.setDate(prevDay.getDate() - 1);

    setCurrDate(prevDay);
  }

  return (
    <Card className="my-4 flex min-h-full w-[350px] flex-col justify-between">
      <div className="flex h-full flex-col justify-between">
        <div>
          <ConferenceHeader currDate={currDate} />

          <CardContent className="w-full flex-1">
            <Timeline timeline={timeline} />
          </CardContent>
        </div>

        <ConferenceFooter
          handleSetPrevDay={handleSetPrevDay}
          handleSetNextDay={handleSetNextDay}
        />
      </div>
    </Card>
  );
}
