import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>
      <footer className="w-full h-12 bg-primary"></footer>
      <Toaster />
    </div>
  );
}
