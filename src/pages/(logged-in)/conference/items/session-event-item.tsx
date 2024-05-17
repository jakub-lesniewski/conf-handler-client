import { Event } from "@/types/Event";

type SessionEventItemProps = {
  event: Event;
};

export default function SessionEventItem({ event }: SessionEventItemProps) {
  return (
    <li
      key={event.id}
      className="cursor-pointer border-b bg-primary shadow-sm hover:bg-secondary"
    >
      <div className="ml-auto w-[98%]">
        <div className="flex justify-between bg-background px-4 py-2">
          <p className="text-start">{event.name}</p>
          <p className="text-end">{event.duration}</p>
        </div>
      </div>
    </li>
  );
}
