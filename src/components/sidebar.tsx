import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Welcome Chippyjak</SheetTitle>
          <SheetDescription>
            <Button variant="destructive">logout</Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
