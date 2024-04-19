import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Session } from "./session";
import { Event } from "./event";

const sessions: Session[] = [
  {
    id: "1",
    timeStart: "09:00",
    timeEnd: "10:30",
    room: "Room A",
    name: "Introduction to TypeScript",
    events: [
      {
        id: "1",
        timeStart: "09:00",
        timeEnd: "10:30",
        name: "TypeScript Basics",
        type: "Workshop",
      },
    ],
  },
  {
    id: "2",
    timeStart: "11:00",
    timeEnd: "12:30",
    room: "Room B",
    name: "Advanced JavaScript Techniques",
    events: [
      {
        id: "2",
        timeStart: "11:00",
        timeEnd: "12:30",
        name: "Functional Programming in JavaScript",
        type: "Talk",
      },
    ],
  },
  {
    id: "3",
    timeStart: "14:00",
    timeEnd: "15:30",
    room: "Room C",
    name: "Web Development Best Practices",
    events: [
      {
        id: "3",
        timeStart: "14:00",
        timeEnd: "15:30",
        name: "Responsive Design Strategies",
        type: "Workshop",
      },
      {
        id: "4",
        timeStart: "15:30",
        timeEnd: "16:30",
        name: "Optimizing Frontend Performance",
        type: "Workshop",
      },
    ],
  },
];

export default function Conference() {
  return (
    <Tabs defaultValue="schedule" className="w-[400px] m-2">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="schedule">schedule</TabsTrigger>
        <TabsTrigger value="userEvents">your events</TabsTrigger>
      </TabsList>
      <Card>
        <TabsContent value="schedule">
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead>time</TableHead>
                <TableHead>room</TableHead>
                <TableHead>name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.map((session) => (
                <Dialog>
                  <DialogTrigger>
                    <TableRow key={session.id} className="cursor-pointer ">
                      <TableCell className="text-xs">
                        {session.timeStart} - {session.timeEnd}
                      </TableCell>
                      <TableCell className="text-xs">{session.room}</TableCell>
                      <TableCell className="text-xs">{session.name}</TableCell>
                    </TableRow>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>I'm a dialog modal window</DialogTitle>
                      <DialogDescription>I'm evil and I displaced table layout</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="userEvents">
          <p className="text-sm text-muted-foreground text-center pb-2">You're not currently presenting anything.</p>
        </TabsContent>
      </Card>
    </Tabs>
  );
}
