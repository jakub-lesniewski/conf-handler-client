import ConferenceHeader from "./conference-header";
import ConferenceNav from "./conference-nav";
import DailySchedule from "./daily-schedule";
import DailyScheduleSkeleton from "./daily-schedule-skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useConference } from "@/hooks/useConference";

const tabs: string[] = ["schedule", "bookmarked"];

export default function Conference() {
  const {
    currDate,
    schedule,
    isScheduleLoading,
    isScheduleError,
    bookmarkedSchedule,
    isBookmarkedScheduleLoading,
    isBookmarkedScheduleError,
    handleSetNextDay,
    handleSetPrevDay,
  } = useConference();

  return (
    <Card className="h-screen-[50px] my-4 flex w-[350px] flex-col">
      <ConferenceHeader currDate={currDate} />
      <Tabs defaultValue={tabs[0]} className="flex-1">
        <TabsList className="w-full">
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab} className="w-1/2">
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={tabs[0]}>
          <CardContent className="overflow-y-auto">
            {isScheduleLoading ? (
              <DailyScheduleSkeleton />
            ) : isScheduleError ? (
              <div className="p-4 text-muted-foreground">
                <p>An error has occurred while fetching your data.</p>
                <p>Try reloading the page.</p>
              </div>
            ) : (
              <DailySchedule schedule={schedule} />
            )}
          </CardContent>
        </TabsContent>

        <TabsContent value={tabs[1]}>
          <CardContent className="overflow-y-auto">
            {isBookmarkedScheduleLoading ? (
              <DailyScheduleSkeleton />
            ) : isBookmarkedScheduleError ? (
              <div className="p-4 text-muted-foreground">
                <p>An error has occurred while fetching your data.</p>
                <p>Try reloading the page.</p>
              </div>
            ) : (
              <DailySchedule schedule={bookmarkedSchedule || []} />
            )}
          </CardContent>
        </TabsContent>
      </Tabs>
      <ConferenceNav
        handleSetNextDay={handleSetNextDay}
        handleSetPrevDay={handleSetPrevDay}
      />
    </Card>
  );
}
