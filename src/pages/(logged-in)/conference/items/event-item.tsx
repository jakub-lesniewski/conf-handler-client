import { Event } from "@/types/Event";
import { Lecture } from "@/types/Lecture";

type EventItemProps = {
  event: Event | Lecture;
};

export default function EventItem({ event }: EventItemProps) {
  const { name, duration } = event;
  return (
    <li className="cursor-pointer border-b bg-secondary shadow-sm">
      <div className="ml-auto w-[98%] md:w-[99%]">
        <div className="flex justify-between bg-background px-4 py-2 transition-all hover:bg-accent">
          <p className="text-sm font-semibold">{name}</p>
          <p className="whitespace-nowrap text-sm font-semibold">{duration}</p>
        </div>
      </div>
    </li>
  );
}
