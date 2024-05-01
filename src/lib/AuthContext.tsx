import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";

export type User = {
  id: string;
  name: string;
  surname: string;
  affiliation: string;
};

type AuthContextType = {
  loggedUser: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("use Auth must be within an AuthProvider");
  }

  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loggedUser, setLoggedUser] = useLocalStorage<User | null>(
    "loggedUser",
    null,
  );

  function login(user: User) {
    setLoggedUser(user);
  }

  function logout() {
    setLoggedUser(null);
  }

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
