"use client";

//import { User } from "next-auth";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export const NewChat = () => {
  const router = useRouter();

  const createNewChat = async () => {
    const chatId = Date.now().toString();

    router.push(`/chat/${chatId}`);
  };

  return (
    <SidebarMenuButton asChild>
      <Button onClick={createNewChat} variant="outline" className="w-full">
        <PlusIcon className="mr-2 size-4" /> New Chat
      </Button>
    </SidebarMenuButton>
  );
};
