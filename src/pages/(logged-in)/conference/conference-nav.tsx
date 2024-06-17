import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
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
    <CardFooter className="flex w-full justify-around border-t p-1">
      <Button onClick={handleSetPrevDay} variant="ghost" className="w-1/2">
        <MoveLeft strokeWidth={1} className="mr-2" /> previous day
      </Button>
      <Button onClick={handleSetNextDay} variant="ghost" className="w-1/2">
        next day
        <MoveRight strokeWidth={1} className="ml-2" />
      </Button>
    </CardFooter>
  );
}
