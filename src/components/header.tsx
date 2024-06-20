import { useAuth } from "@/lib/AuthContext";
import { ThemeToggle } from "./theme-toggler";
import Sidebar from "./sidebar";

export default function Header() {
  const { loggedUser } = useAuth();

  return (
    <header className="flex w-full items-center justify-between bg-primary">
      <div className="ml-auto flex items-center">
        <ThemeToggle />
        {loggedUser && <Sidebar />}
      </div>
    </header>
  );
}
