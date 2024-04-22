import { Session } from "./conference-types";

type SessionItemProps = {
  session: Session;
};

export default function SessionItem({ session }: SessionItemProps) {
  return (
    <>
      <div>
        <div className="w-24 bg-red-700"></div>
        <p className="text-sm font-semibold">{session.name}</p>
        <p className="text-sm">{session.roomNumber}</p>
      </div>
      <p className="text-sm font-semibold">{session.duration}</p>
    </>
  );
}
