import { User } from "@/types/User";
import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";

type AuthContextType = {
  loggedUser: User | null;
  login: (user: User) => void;
  logout: () => void;
  addBookmarkedEvent: (eventId: string) => void;
  removeBookmarkedEvent: (eventId: string) => void;
  isBookmarkedEvent: (eventId: string) => boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be within an AuthProvider");
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

  function addBookmarkedEvent(eventId: string) {
    if (loggedUser) {
      setLoggedUser({
        ...loggedUser,
        bookmarkedEvents: [...loggedUser.bookmarkedEvents, eventId],
      });
    }
  }

  function removeBookmarkedEvent(eventId: string) {
    if (loggedUser) {
      setLoggedUser({
        ...loggedUser,
        bookmarkedEvents: loggedUser.bookmarkedEvents.filter(
          (id) => id !== eventId,
        ),
      });
    }
  }

  function isBookmarkedEvent(eventId: string): boolean {
    if (loggedUser) {
      return loggedUser.bookmarkedEvents.includes(eventId);
    }
    return false;
  }

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        login,
        logout,
        addBookmarkedEvent,
        removeBookmarkedEvent,
        isBookmarkedEvent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
