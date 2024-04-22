import { TimelineElement } from "./conference-types";

export async function loader(): Promise<TimelineElement[]> {
  const timeline: TimelineElement[] = [
    {
      id: "session1",
      name: "Morning Session",
      duration: "09:00 - 12:00",
      city: "New York",
      street: "Main Street",
      building: "123",
      roomNumber: "C101",
      eventList: [
        {
          id: "event1",
          name: "Networking Breakfast",
          duration: "09:00 - 10:00",
        },
        {
          id: "lecture1",
          name: "Introduction to Artificial Intelligence",
          duration: "10:00 - 11:00",
          abstract: "This lecture will cover the basics of AI.",
          lecturer: "Dr. John Smith",
          topic: "Artificial Intelligence",
        },
        {
          id: "lecture2",
          name: "Machine Learning Fundamentals",
          duration: "11:00 - 12:00",
          abstract: "This lecture will introduce the fundamentals of machine learning.",
          lecturer: "Dr. Emily Johnson",
          topic: "Machine Learning",
        },
      ],
    },
    {
      id: "event2",
      name: "Networking Lunch",
      duration: "12:00 - 13:00",
    },
  ];

  return timeline;
}
