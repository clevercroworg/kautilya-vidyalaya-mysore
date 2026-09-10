import { Metadata } from "next";
import AlumniForumClientView from "@/components/student-corner/AlumniForumClientView";

export const metadata: Metadata = {
  title: "Alumni Forum | Kautilya Vidyalaya Mysuru",
  description:
    "Connect with the global alumni network of Kautilya Vidyalaya. Register your alumni details, discover alumni spotlights, and give back through student mentorship.",
};

export default function AlumniForumPage() {
  return <AlumniForumClientView />;
}
