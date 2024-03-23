import { MailWarning } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import Sidebar from "./sidebar";

export default function Header() {
  const { toast } = useToast();

  return (
    <header className="w-full bg-primary flex p-3 justify-between">
      <MailWarning
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "There's been a change to conference schedule!",
            action: (
              <ToastAction altText="acknowledge">
                <div className="border-2 py-1 px-2 rounded-lg">acknowledge</div>
              </ToastAction>
            ),
          });
        }}
        className="cursor-pointer text-white"
      />
      <Sidebar />
    </header>
  );
}
