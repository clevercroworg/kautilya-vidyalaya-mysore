import { Metadata } from "next";
import AwardsAchievementsClientView from "@/components/student-corner/AwardsAchievementsClientView";

export const metadata: Metadata = {
  title: "Awards & Achievements | Kautilya Vidyalaya Mysuru",
  description:
    "Celebrating stellar laurels won by students and faculty of Kautilya Vidyalaya in chess, swimming, gymnastics, karate, skating, badminton, and national institutional honors.",
};

export default function AwardsAchievementsPage() {
  return <AwardsAchievementsClientView />;
}
