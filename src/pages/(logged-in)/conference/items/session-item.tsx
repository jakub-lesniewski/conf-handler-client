import { Session } from "@/types/Session";

type SessionItemProps = {
  session: Session;
};

export default function SessionItem({ session }: SessionItemProps) {
  return (
    <li className="cursor-pointer border-b bg-primary hover:bg-primary">
      <div className="ml-auto w-[98%]">
        <div className="flex items-center justify-between gap-1 bg-background px-4 py-2">
          <div className="flex flex-col">
            <p className="text-sm font-semibold">{session.name}</p>
            <p className="text-sm">{session.roomNumber}</p>
          </div>
          <p className="text-sm font-semibold">{session.duration}</p>
        </div>
      </div>
    </li>
  );
}
