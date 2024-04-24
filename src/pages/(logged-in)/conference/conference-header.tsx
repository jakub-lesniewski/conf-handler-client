import { CardHeader } from "@/components/ui/card";

type ConferenceHeaderProps = {
  currDate: Date;
};

export default function ConferenceHeader({ currDate }: ConferenceHeaderProps) {
  return (
    <CardHeader className="border-b">
      <p className="font-bold tracking-widest">
        {currDate.toLocaleDateString("en-UK", { weekday: "long" })}
      </p>
      <p className="text-sm">
        {currDate.getDate()}{" "}
        {currDate.toLocaleDateString("en-UK", { month: "long" })},{" "}
        {currDate.getFullYear()}
      </p>
    </CardHeader>
  );
}
