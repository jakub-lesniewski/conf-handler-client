import { useAuth } from "@/lib/AuthContext";

import Sidebar from "./sidebar";
import MessageWarning from "./message-warning";

export default function Header() {
  const { loggedUser } = useAuth();

  return (
    <header className="flex h-[--header-height] w-full justify-between bg-primary p-3">
      <MessageWarning />
      {loggedUser && <Sidebar />}
    </header>
  );
}
