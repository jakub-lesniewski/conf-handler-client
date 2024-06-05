import { MailWarning } from "lucide-react";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export type WarningMessage = {
  id: string;
  header: string;
  description: string;
};

const dummyMessages: WarningMessage[] = [
  {
    id: "1",
    header: "Warning 1",
    description: "stuff",
  },
  {
    id: "2",
    header: "Warning 2",
    description: "stuff",
  },
  {
    id: "3",
    header: "Warning 3",
    description: "stuff",
  },
];

export default function MessageWarning() {
  const [messageList, setMessageList] =
    useState<WarningMessage[]>(dummyMessages);

  function displayMessage(): void {
    if (messageList.length === 0) {
      toast.info("No more news.", {
        description: "You are up to date!",
        duration: 5000,
      });
      return;
    }

    const currentMessage = messageList[0];

    setMessageList((prevList) =>
      prevList.filter((message) => message.id !== currentMessage.id),
    );

    toast.info(currentMessage.header, {
      description: currentMessage.description,
    });
  }
  return (
    <div onClick={displayMessage} className="cursor-pointer text-white">
      {messageList.length === 0 ? (
        <Mail />
      ) : (
        <MailWarning className="animate-pulse" />
      )}
    </div>
  );
}
