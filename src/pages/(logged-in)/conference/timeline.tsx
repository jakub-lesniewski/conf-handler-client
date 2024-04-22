import { TimelineElement } from "./page";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

type TimelineProps = {
  timelineList: TimelineElement[];
};

export default function Timeline({ timelineList }: TimelineProps) {
  return (
    <ol className="mt-2">
      {timelineList.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </ol>
  );
}

type TimelineItemProps = {
  item: TimelineElement;
};

function TimelineItem({ item }: TimelineItemProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <li className="border-b p-2 cursor-pointer flex justify-between items-center hover:bg-secondary rounded-md">
          <div>
            <p className="text-sm font-semibold">{item.name}</p>
            <p className="text-sm">{item.roomNumber}</p>
          </div>
          <div className="text-sm font-semibold">{`${item.timeStart} - ${item.timeEnd}`}</div>
        </li>
      </DialogTrigger>
    </Dialog>
  );
}
