import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

export default function Layout() {
  return (
    <div className="flex h-svh flex-col">
      <Header />
      <main className="flex min-h-[calc(100vh-var(--header-height))] flex-grow justify-center">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}
