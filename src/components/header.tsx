import { useAuth } from "@/lib/AuthContext";

import Sidebar from "./sidebar";
import MessageWarning from "./message-warning";
import { ThemeToggle } from "./theme-toggler";

export default function Header() {
  const { loggedUser } = useAuth();

  return (
    <header className="flex h-[--header-height] w-full justify-between bg-primary p-3">
      <MessageWarning />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {loggedUser && <Sidebar />}
      </div>
    </header>
  );
}
