import { useAuth } from "@/lib/AuthContext";
import { ThemeToggle } from "./theme-toggler";
import Sidebar from "./sidebar";
import MessageWarning from "./message-warning";

export default function Header() {
  const { loggedUser } = useAuth();

  return (
    <header className="flex w-full items-center justify-between bg-primary px-4 py-2">
      {loggedUser && <MessageWarning />}
      <div className={`flex items-center gap-2 ${loggedUser ? "" : "ml-auto"}`}>
        <ThemeToggle />
        {loggedUser && <Sidebar />}
      </div>
    </header>
  );
}
