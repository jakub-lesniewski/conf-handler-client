import {
  Sheet,
  SheetContent,
  SheetDescription,
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
      <SheetTrigger>
        <Menu className="cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{`Welcome ${loggedUser?.name} ${loggedUser?.surname}`}</SheetTitle>
          <SheetDescription>
            <Button
              onClick={() => {
                logout();
                navigate("/");
              }}
              variant="destructive"
            >
              logout
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
