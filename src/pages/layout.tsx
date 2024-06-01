import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";
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
