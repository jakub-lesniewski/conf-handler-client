import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export default function Layout() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <main className="box-border flex min-h-[calc(100vh-var(--header-height))] flex-grow justify-center">
        <Outlet />
      </main>
      <footer className="w-full bg-primary p-4">
        <p>bingus</p>
        <p>bingus</p>
        <p>bingus</p>
        <p>bingus</p>
        <p>bingus</p>
      </footer>
      <Toaster />
    </div>
  );
}
