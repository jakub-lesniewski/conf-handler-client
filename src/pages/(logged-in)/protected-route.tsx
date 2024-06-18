import { ReactNode } from "react";
import { useAuth } from "@/lib/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { loggedUser } = useAuth();

  if (loggedUser) {
    return children;
  }

  return (
    <div className="my-auto flex flex-col items-center gap-4 px-4">
      <h1 className="text-2xl font-semibold tracking-tight">
        You do no have access to this content :(
      </h1>
      <img
        className="rounded-md"
        src="https://http.cat/401"
        alt="image of a cat that was denied access"
      />
      <Button
        onClick={() => navigate("/")}
        size="lg"
        className="w-full text-lg"
      >
        Come back to login page
      </Button>
    </div>
  );
}
