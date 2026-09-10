import { Metadata } from "next";
import PodcastClientView from "@/components/media/PodcastClientView";

export const metadata: Metadata = {
  title: "Kautilya Konnect Podcast | Kautilya Vidyalaya Mysore",
  description:
    "Listen to Kautilya Konnect, the official podcast of Kautilya Vidyalaya Mysore. Inspiring conversations on pediatric health, child psychology, holistic education, and progressive pedagogy.",
  keywords: [
    "Kautilya Vidyalaya podcast",
    "Kautilya Konnect",
    "Mysore school podcast",
    "parenting and child health podcast",
    "CBSE school education insights",
  ],
};

export default function PodcastPage() {
  return <PodcastClientView />;
}
