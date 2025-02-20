import { auth } from "@/auth";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { NewChat } from "./new-chat";

export const AppSidebar = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  if (!session.user) {
    redirect("/");
  }

  const user = session.user;

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <NewChat user={user} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </Sidebar>
  );
};
