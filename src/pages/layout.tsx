import Header from "@/components/header";
import { Outlet } from "react-router-dom";

import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export default function Layout() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <main className="box-border flex min-h-[calc(100vh-var(--header-height))] flex-grow justify-center">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
