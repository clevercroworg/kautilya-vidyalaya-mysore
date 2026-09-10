import type { Metadata } from "next";
import CoCurricularClientView from "@/components/academics/CoCurricularClientView";

export const metadata: Metadata = {
  title: "Co-Curricular Activities | Arts, Music, Quizzes & Drama - Kautilya Vidyalaya",
  description:
    "Explore the diverse co-curricular activities at Kautilya Vidyalaya, Mysuru. From science quizzes and debate clubs to music, dance, visual arts, and theatrical expression.",
  keywords: [
    "Co-Curricular Activities Kautilya Vidyalaya",
    "School Clubs Mysore",
    "Music and Dance CBSE School",
    "Science Quizzes Mysore",
    "Creative Arts Kautilya",
  ],
  openGraph: {
    title: "Co-Curricular Activities | Kautilya Vidyalaya, Mysuru",
    description:
      "Nurturing creativity, self-expression, and confidence through arts, music, dramatics, and scientific inquiry.",
    url: "https://kautilyavidyalaya.edu.in/co-curricular-activities",
    siteName: "Kautilya Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

export default function CoCurricularPage() {
  return <CoCurricularClientView />;
}
