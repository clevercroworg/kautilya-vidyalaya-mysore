import type { Metadata } from "next";
import EventsGalleryClientView from "@/components/school/EventsGalleryClientView";

export const metadata: Metadata = {
  title: "Events & Gallery | Celebrations, Field Trips & Achievements - Kautilya Vidyalaya",
  description:
    "Explore the vibrant school life, cultural festivals, science exhibitions, national awards, and educational field trips at Kautilya Vidyalaya, Mysuru.",
  keywords: [
    "Kautilya Vidyalaya Events",
    "School Gallery Mysore",
    "Dynamic School Award",
    "Saamskrithika Parva",
    "School Science Exhibition Mysore",
    "Singapore Trip Kautilya",
  ],
  openGraph: {
    title: "Events & Gallery | Kautilya Vidyalaya, Mysuru",
    description:
      "Capturing moments of learning, joy, celebration, and achievement at Kautilya Vidyalaya.",
    url: "https://kautilyavidyalaya.edu.in/events-gallery",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function EventsGalleryPage() {
  return <EventsGalleryClientView />;
}
