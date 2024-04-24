import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow justify-center">
        <Outlet />
      </main>
      <footer className="h-12 w-full bg-primary"></footer>
      <Toaster />
    </div>
  );
}
