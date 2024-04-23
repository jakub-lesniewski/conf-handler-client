import Timeline from "./timeline";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useLoaderData } from "react-router-dom";
import { TimelineElement } from "./conference-types";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Conference() {
  const [currDate, setCurrDate] = useState<Date>(new Date());

  const timeline = useLoaderData() as TimelineElement[];

  function handleSetNextDay() {
    const nextDay = new Date(currDate);
    nextDay.setDate(nextDay.getDate() + 1);
    console.log(nextDay);

    setCurrDate(nextDay);
  }

  function handleSetPrevDay() {
    const prevDay = new Date(currDate);
    prevDay.setDate(prevDay.getDate() - 1);
    console.log(prevDay);

    setCurrDate(prevDay);
  }

  return (
    <Card className="my-8 flex flex-col justify-between w-[350px] h-[500px]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <CardHeader className="border-b">
            <p className="font-bold tracking-widest">{currDate.toLocaleDateString("en-UK", { weekday: "long" })}</p>
            <p className="text-sm">
              {currDate.getDate()} {currDate.toLocaleDateString("en-UK", { month: "long" })}, {currDate.getFullYear()}
            </p>
          </CardHeader>

          <CardContent className="w-full flex-1">
            <Timeline timeline={timeline} />
          </CardContent>
        </div>

        <CardFooter className="border-t p-1 flex justify-around">
          <Button onClick={handleSetPrevDay} variant="ghost">
            <MoveLeft strokeWidth={1} className="mr-2" /> previous day
          </Button>
          <Button onClick={handleSetNextDay} variant="ghost">
            next day
            <MoveRight strokeWidth={1} className="ml-2" />
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
