import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const { loggedUser, logout, clearBookmarkedEvents } = useAuth();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>{`Welcome ${loggedUser?.name} ${loggedUser?.surname}`}</SheetTitle>
        </SheetHeader>
        <Button
          onClick={() => clearBookmarkedEvents()}
          className="font-semibold"
        >
          Clear bookmarked events
        </Button>
        <Button
          onClick={() => {
            logout();
            navigate("/");
          }}
          variant="destructive"
          className="font-semibold"
        >
          logout
        </Button>
      </SheetContent>
    </Sheet>
  );
}
