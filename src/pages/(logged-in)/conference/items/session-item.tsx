import { Session } from "@/types/Session";

type SessionItemProps = {
  session: Session;
};

export default function SessionItem({ session }: SessionItemProps) {
  const { name, roomNumber, duration } = session;

  return (
    <li className="cursor-pointer border-b bg-primary hover:bg-primary">
      <div className="ml-auto w-[98%] sm:w-[99%]">
        <div className="flex items-center justify-between gap-2 bg-background px-4 py-2 transition-all hover:bg-accent">
          <div className="flex flex-col">
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-sm">{roomNumber}</p>
          </div>
          <p className="whitespace-nowrap text-sm font-semibold">{duration}</p>
        </div>
      </div>
    </li>
  );
}
