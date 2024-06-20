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
  const { loggedUser, logout } = useAuth();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon">
          <Menu className="cursor-pointer text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>{`Welcome ${loggedUser?.name} ${loggedUser?.surname}`}</SheetTitle>
        </SheetHeader>
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
