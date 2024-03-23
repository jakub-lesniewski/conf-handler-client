import { Lightbulb, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="w-full bg-primary flex p-3 justify-between">
      <Lightbulb className="cursor-pointer text-white" />
      <Sheet>
        <SheetTrigger>
          <Menu className="cursor-pointer text-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Welcome Chippyjak</SheetTitle>
            <SheetTitle>Bye Reijak</SheetTitle>
            <SheetDescription>
              <Button variant="destructive">logout</Button>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
