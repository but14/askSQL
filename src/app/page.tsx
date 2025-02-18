import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { GitBranchIcon } from "lucide-react";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  return (
    <>
      {session && session.user ? (
        redirect("/chat")
      ) : (
        <Dialog open>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Dang nhap tai khoan</DialogTitle>
              <DialogDescription>
                Dang nhap tai khoan de bat dau cuoc tro chuyen
              </DialogDescription>
            </DialogHeader>
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
              className="flex items-center justify-center py-4"
            >
              <Button
                type="submit"
                className="w-full max-w-sm"
                variant="outline"
              >
                <GitBranchIcon className="mr-2 size-4" />
                Dang nhap bang Github
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
