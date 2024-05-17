import { CardHeader } from "@/components/ui/card";

type ConferenceHeaderProps = {
  currDate: Date;
};

export default function ConferenceHeader({ currDate }: ConferenceHeaderProps) {
  return (
    <CardHeader className="border-b shadow-sm">
      <h2 className="text-lg font-bold tracking-widest">
        {currDate.toLocaleDateString("en-UK", { weekday: "long" })}
      </h2>
      <p>
        {currDate.getDate()}{" "}
        {currDate.toLocaleDateString("en-UK", { month: "long" })},{" "}
        {currDate.getFullYear()}
      </p>
    </CardHeader>
  );
}
