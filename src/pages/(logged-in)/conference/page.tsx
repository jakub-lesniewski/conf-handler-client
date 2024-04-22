import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Timeline from "./timeline";

export type TimelineElement = {
  id: string;
  name: string;
  timeStart: string;
  timeEnd: string;
  roomNumber: string;
};

const mockData: TimelineElement[] = [
  {
    id: "1",
    name: "Session",
    timeStart: "12:00",
    timeEnd: "14:30",
    roomNumber: "C202",
  },
  {
    id: "2",
    name: "Another Interesting Session",
    timeStart: "15:00",
    timeEnd: "17:30",
    roomNumber: "A101",
  },
];

export default function Conference() {
  return (
    <Card className="my-8 flex flex-col justify-between w-[350px]">
      <div>
        <CardHeader className="border-b">
          <p className="font-bold tracking-widest">Wednesday</p>
          <p className="text-sm">12 March, 2024</p>
        </CardHeader>
        <CardContent>
          <Timeline timelineList={mockData} />
        </CardContent>
      </div>
      <CardFooter className="text-sm border-t pt-2 flex flex-col">
        <Pagination className="text-foreground">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
}
