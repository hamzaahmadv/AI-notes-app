import { getProfileByUserId } from "@/db/queries/profiles-queries";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Notes from "@/components/notes/notes";

export default async function NotesPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/login");
  }

  const profile = await getProfileByUserId(userId);

  if (!profile) {
    return redirect("/signup");
  }

  if (profile.membership === "free") {
    return redirect("/pricing");
  }

  return <Notes />;
}
