import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Timeline from "./timeline";
import { useLoaderData } from "react-router-dom";
import { TimelineElement } from "./conference-types";
import { useState } from "react";

export default function Conference() {
  const [currDate, setCurrDate] = useState({
    currDayOfWeek: new Date().toLocaleString("default", { weekday: "long" }),
    currDay: new Date().getDate(),
    currMonth: new Date().toLocaleString("default", { month: "long" }),
    currYear: new Date().getFullYear(),
  });

  const timeline = useLoaderData() as TimelineElement[];

  console.log(timeline);
  console.log(currDate);

  return (
    <Card className="my-8 flex flex-col justify-between w-[350px]">
      <div>
        <CardHeader className="border-b">
          <p className="font-bold tracking-widest">{currDate.currDayOfWeek}</p>
          <p className="text-sm">
            {currDate.currDay} {currDate.currMonth}, {currDate.currYear}
          </p>
        </CardHeader>

        <CardContent className="w-full">
          <Timeline timeline={timeline} />
        </CardContent>
      </div>
    </Card>
  );
}
