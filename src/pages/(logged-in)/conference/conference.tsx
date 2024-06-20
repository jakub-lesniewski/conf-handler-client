import ConferenceHeader from "./conference-header";
import ConferenceNav from "./conference-nav";
import DailySchedule from "./daily-schedule";
import DailyScheduleSkeleton from "./daily-schedule-skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { useConference } from "@/hooks/useConference";
import { useLoaderData } from "react-router-dom";
import { ConferenceDetails } from "@/types/ConferenceDetails";
import { fetchConferenceDetails } from "@/lib/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Conference() {
  const { startDate, endDate } = useLoaderData() as ConferenceDetails;

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
  } = useConference(new Date(startDate), new Date(endDate));

  return (
    <Card className="m-2 flex w-screen flex-col md:w-[500px]">
      <ConferenceHeader currDate={currDate} />
      <Tabs
        defaultValue="schedule"
        className="flex h-full flex-col overflow-hidden"
      >
        <TabsContent value="schedule" className="flex-grow overflow-auto">
          <CardContent>
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

        <TabsContent value="bookmarked" className="flex-grow overflow-auto">
          <CardContent>
            {isBookmarkedScheduleLoading ? (
              <DailyScheduleSkeleton />
            ) : isBookmarkedScheduleError ? (
              <div className="p-4 text-muted-foreground">
                <p>An error has occurred while fetching your data.</p>
                <p>Try reloading the page.</p>
              </div>
            ) : (
              <DailySchedule schedule={bookmarkedSchedule} />
            )}
          </CardContent>
        </TabsContent>

        <div className="flex-shrink-0">
          <TabsList className="flex border-t">
            <TabsTrigger value="schedule" className="w-1/2">
              schedule
            </TabsTrigger>
            <TabsTrigger value="bookmarked" className="w-1/2">
              bookmarked
            </TabsTrigger>
          </TabsList>
          <ConferenceNav
            handleSetNextDay={handleSetNextDay}
            handleSetPrevDay={handleSetPrevDay}
          />
        </div>
      </Tabs>
    </Card>
  );
}

export async function loader() {
  try {
    const data = await fetchConferenceDetails();
    return data;
  } catch (error) {
    console.error("Error fetching conference details:", error);
    throw error;
  }
}
