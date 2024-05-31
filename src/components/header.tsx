import { MailWarning } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { toast } from "sonner";
import Sidebar from "./sidebar";

export default function Header() {
  const { loggedUser } = useAuth();

  return (
    <header className="flex h-[--header-height] w-full justify-between bg-primary p-3">
      <MailWarning
        onClick={() =>
          toast.info("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
        className="cursor-pointer text-white"
      />
      {loggedUser && <Sidebar />}
    </header>
  );
}
