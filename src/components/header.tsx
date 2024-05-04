import { MailWarning } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import Sidebar from "./sidebar";
import { useAuth } from "@/lib/AuthContext";

export default function Header() {
  const { loggedUser } = useAuth();
  const { toast } = useToast();

  return (
    <header className="flex h-[--header-height] w-full justify-between bg-primary p-3">
      <MailWarning
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "There's been a change to conference schedule!",
            action: (
              <ToastAction altText="acknowledge">
                <div className="rounded-lg border-2 px-2 py-1">acknowledge</div>
              </ToastAction>
            ),
          });
        }}
        className="cursor-pointer text-white"
      />
      {loggedUser && <Sidebar />}
    </header>
  );
}
