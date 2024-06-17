import { Event } from "@/types/Event";

type EventItemProps = {
  event: Event;
};

export default function EventItem({ event }: EventItemProps) {
  return (
    <li className="cursor-pointer border-b bg-secondary shadow-sm">
      <div className="ml-auto w-[98%]">
        <div className="flex justify-between bg-background px-4 py-2 transition-all hover:bg-accent">
          <p className="text-sm font-semibold">{event.name}</p>
          <p className="whitespace-nowrap text-sm font-semibold">
            {event.duration}
          </p>
        </div>
      </div>
    </li>
  );
}
