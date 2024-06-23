import { Menu } from "./Menu";

export type Event = {
  id: string;
  name: string;
  duration: string;
  description?: string;
  menu?: Menu;
};
