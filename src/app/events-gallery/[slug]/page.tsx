import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetailClientView from "@/components/school/EventDetailClientView";
import { eventsDetailData, getEventBySlug } from "@/data/eventsDetailData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return eventsDetailData.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | Kautilya Vidyalaya Mysore",
      description: "The requested school event could not be found.",
    };
  }

  return {
    title: `${event.title} | Events & Gallery`,
    description: event.description,
    keywords: [
      event.title,
      event.category,
      "Kautilya Vidyalaya Events",
      "School Events Mysore",
      "Kautilya Gallery",
    ],
    openGraph: {
      title: `${event.title} | Kautilya Vidyalaya Mysore`,
      description: event.description,
      url: `https://kautilyavidyalaya.edu.in/events-gallery/${event.slug}`,
      siteName: "Kautilya Vidyalaya Mysore",
      images: [
        {
          url: event.coverImage,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Kautilya Vidyalaya`,
      description: event.description,
      images: [event.coverImage],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return <EventDetailClientView event={event} />;
}
