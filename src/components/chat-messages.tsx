import { Session } from "next-auth";
//import { useCollection } from "react-firebase-hooks/firestore";
//import { collection, orderBy, query } from "@firebase/firestore";

import { ScrollArea } from "./ui/scroll-area";
//import { db } from "@/lib/firebase";
import { Message } from "./message";

const fakeMessages = [
  { id: "1", text: "Hello! 👋", sender: "user" },
  { id: "2", text: "Hi! How are you?", sender: "bot" },
  { id: "3", text: "I'm good, thanks! 😃", sender: "user" },
];

export const ChatMessages = ({
  chatId,
  session,
}: {
  chatId: string;
  session: Session;
}) => {
  return (
    <ScrollArea className="flex-1 p-4">
      {fakeMessages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </ScrollArea>
  );
};
