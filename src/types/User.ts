import { UserEvent } from "./UserEvent";

export type User = {
  id: string;
  title?: string;
  name: string;
  surname: string;
  affiliation: string;
  bookmarkedEvents: string[];
  involvedInEvents?: UserEvent[];
};
