import { Event } from "./conference-types";

type EventItemProps = {
  event: Event;
};

export default function EventItem({ event }: EventItemProps) {
  console.log(event);

  return (
    <>
      <p className="text-sm font-semibold">{event.name}</p>
      <p className="text-sm font-semibold">{event.duration}</p>
    </>
  );
}
