import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Timeline from "./timeline";
import { useLoaderData } from "react-router-dom";
import { TimelineElement } from "./conference-types";

export default function Conference() {
  const timeline = useLoaderData() as TimelineElement[]; // fucked up evil casting but react router has no native support for ts???
  console.log(timeline);

  return (
    <Card className="my-8 flex flex-col justify-between w-[350px]">
      <div>
        <CardHeader className="border-b">
          <p className="font-bold tracking-widest">Wednesday</p>
          <p className="text-sm">12 March, 2024</p>
        </CardHeader>

        <CardContent>
          <Timeline timeline={timeline} />
        </CardContent>
      </div>
    </Card>
  );
}
