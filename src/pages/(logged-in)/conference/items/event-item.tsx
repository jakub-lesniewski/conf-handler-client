import { Event } from "@/types/Event";

type EventItemProps = {
  event: Event;
};

export default function EventItem({ event }: EventItemProps) {
  return (
    <li className="cursor-pointer border-b bg-secondary">
      <div className="ml-auto w-[98%]">
        <div className="flex justify-between gap-3 bg-background px-4 py-2">
          <p className="text-sm font-semibold">{event.name}</p>
          <p className="text-sm font-semibold">{event.duration}</p>
        </div>
      </div>
    </li>
  );
}
