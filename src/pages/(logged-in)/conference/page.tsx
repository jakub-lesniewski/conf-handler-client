import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type TimeLineElement = {
  id: string;
  name: string;
  timeStart: string;
  timeEnd: string;
  roomNumber: string;
};

const mockData: TimeLineElement[] = [
  {
    id: "1",
    name: "Bardzo fajna sesja",
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
    <Card className="my-8 w- flex flex-col justify-between w-[350px]">
      <div>
        <CardHeader className="border-b">
          <p className="tracking-wider font-semibold">
            <span className="font-bold tracking-widest">Wednesday</span> 12 March, 2024
          </p>
        </CardHeader>
        <CardContent>
          <ol className="mt-2">
            {mockData.map((item) => (
              <li
                key={item.id}
                className="border-b p-2 cursor-pointer flex justify-between items-center hover:bg-secondary rounded-md"
              >
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-sm">{item.roomNumber}</p>
                </div>
                <p className="text-sm">{`${item.timeStart} - ${item.timeEnd}`}</p>
              </li>
            ))}
          </ol>
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
