import { TimelineElement } from "@/types/TimelineElement";

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
          abstract: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          lecturer: "Dr. John Smith",
          topic: "Artificial Intelligence",
        },
        {
          id: "lecture2",
          name: "Machine Learning Fundamentals",
          duration: "11:00 - 12:00",
          abstract:
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
          lecturer: "Dr. Emily Johnson",
          topic: "Machine Learning",
        },
        {
          id: "lecture3",
          name: "Machine Learning Fundamentals",
          duration: "11:00 - 12:00",
          abstract:
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
          lecturer: "Dr. Emily Johnson",
          topic: "Machine Learning",
        },
        {
          id: "lecture4",
          name: "Machine Learning Fundamentals",
          duration: "11:00 - 12:00",
          abstract:
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
          lecturer: "Dr. Emily Johnson",
          topic: "Machine Learning",
        },
        {
          id: "lecture5",
          name: "Machine Learning Fundamentals",
          duration: "11:00 - 12:00",
          abstract:
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
          lecturer: "Dr. Emily Johnson",
          topic: "Machine Learning",
        },
      ],
    },
    {
      id: "event3",
      name: "Networking Lunch",
      duration: "12:00 - 13:00",
    },
    {
      id: "event4",
      name: "Networking Lunch",
      duration: "12:00 - 13:00",
    },
    {
      id: "event5",
      name: "Networking Lunch",
      duration: "12:00 - 13:00",
    },
    {
      id: "event6",
      name: "Networking Lunch",
      duration: "12:00 - 13:00",
    },
    {
      id: "event7",
      name: "Networking Lunch",
      duration: "12:00 - 13:00",
    },
    {
      id: "event8",
      name: "Networking Lunch",
      duration: "12:00 - 13:00",
    },
  ];

  return timeline;
}
