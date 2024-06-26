import { Skeleton } from "@/components/ui/skeleton";

export default function DailyScheduleSkeleton() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <div key={index}>
          <div className="flex h-[36px] justify-between border-b px-4 py-2">
            <Skeleton className="h-4 w-[180px]" />
            <Skeleton className="h-4 w-[90px]" />
          </div>
          <div className="flex h-[36px] justify-between border-b px-4 py-2">
            <Skeleton className="h-4 w-[140px]" />
            <Skeleton className="h-4 w-[90px]" />
          </div>
        </div>
      ))}
    </>
  );
}
