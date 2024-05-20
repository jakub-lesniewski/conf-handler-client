import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CardFooter } from "@/components/ui/card";

type ConferenceNavProps = {
  handleSetPrevDay: () => void;
  handleSetNextDay: () => void;
};

export default function ConferenceNav({
  handleSetPrevDay,
  handleSetNextDay,
}: ConferenceNavProps) {
  return (
    <CardFooter className="flex justify-around border-t p-1">
      <Button onClick={handleSetPrevDay} variant="ghost" className="w-[140px]">
        <MoveLeft strokeWidth={1} className="mr-2" /> previous day
      </Button>
      <Separator orientation="vertical" />
      <Button onClick={handleSetNextDay} variant="ghost" className="w-[140px]">
        next day
        <MoveRight strokeWidth={1} className="ml-2" />
      </Button>
    </CardFooter>
  );
}
