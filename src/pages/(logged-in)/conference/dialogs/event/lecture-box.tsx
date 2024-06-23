import { Button } from "@/components/ui/button";
import { Lecture } from "@/types/Lecture";

type LectureBoxProps = {
  lecture: Lecture;
};

export default function LectureBox({ lecture }: LectureBoxProps) {
  const { lecturer, topic, chairman, abstract } = lecture;
  return (
    <>
      <div className="flex flex-col gap-2  border-b pb-2">
        <div className="flex gap-3">
          <p>Lecturer:</p>
          <p className="font-semibold">{lecturer}</p>
        </div>
        <div className="flex gap-3">
          <p>Topic:</p>
          <p className="font-semibold">{topic}</p>
        </div>
        {chairman && (
          <div className="flex gap-2">
            <p>Chairman:</p>
            <p className="font-semibold">{chairman}</p>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        {abstract && (
          <a href={abstract} target="_blank" rel="noopener noreferrer">
            <Button>See the abstract document.</Button>
          </a>
        )}
      </div>
    </>
  );
}
