import { Session } from "@/types/Session";

type SessionItemProps = {
  session: Session;
};

export default function SessionItem({ session }: SessionItemProps) {
  return (
    <>
      <div>
        <p className="text-sm font-semibold">{session.name}</p>
        <p className="text-sm">{session.roomNumber}</p>
      </div>
      <p className="text-sm font-semibold">{session.duration}</p>
    </>
  );
}
