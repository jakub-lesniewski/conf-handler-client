import { Event } from "@/types/Event";

type EventItemProps = {
  event: Event;
};

export default function EventItem({ event }: EventItemProps) {
  return (
    <>
      <p className="text-sm font-semibold">{event.name}</p>
      <p className="text-sm font-semibold">{event.duration}</p>
    </>
  );
}
