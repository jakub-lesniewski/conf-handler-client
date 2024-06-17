import { Lecture } from "@/types/Lecture";

type SessionLectureItemProps = {
  lecture: Lecture;
};

export default function SessionLectureItem({
  lecture,
}: SessionLectureItemProps) {
  return (
    <li key={lecture.id} className="cursor-pointer border-b bg-primary">
      <div className="ml-auto w-[98%]">
        <div className="flex flex-col gap-1 bg-background px-4 py-2 transition-all hover:bg-accent">
          <div className="flex w-full items-center justify-between gap-3">
            <p className="flex-1">{lecture.name}</p>
            <p className="whitespace-nowrap">{lecture.duration}</p>
          </div>
          <p>
            {lecture.lecturer} about{" "}
            <span className="font-bold">{lecture.topic}</span>
          </p>
        </div>
      </div>
    </li>
  );
}
