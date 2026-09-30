import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kautilyavidyalaya.edu.in"),
  title: {
    default: "Kautilya Vidyalaya | Best CBSE School in Mysore | Admissions 2027-28",
    template: "%s | Kautilya Vidyalaya Mysore",
  },
  description:
    "Kautilya Vidyalaya is a premier CBSE-affiliated school in Mysore (Dattagalli, Kanakadasa Nagar), offering holistic education from Kindergarten to Grade 10. Featuring Atal Tinkering Labs, sports excellence, and 100% CBSE board track record. Admissions open for 2027–28.",
  keywords: [
    // Primary School & Region Keywords
    "Best CBSE School in Mysore",
    "Top CBSE Schools in Mysuru",
    "Kautilya Vidyalaya Mysore",
    "Kautilya Vidyalaya Dattagalli",
    "CBSE School Kanakadasa Nagar Mysore",
    "Best Schools near Kuvempunagar Mysore",
    "CBSE Schools near Bogadi Mysore",
    "Best School in Vijayanagar Mysore",
    "CBSE School Ramakrishnanagar Mysuru",
    // Admissions & Academic Search Keywords
    "School Admissions 2027-28 Mysore",
    "CBSE School Admissions Mysore",
    "Best Kindergarten and Pre-Primary Mysore",
    "Best Primary School in Mysore",
    "Top High Schools in Mysore",
    "CBSE Affiliation 830193 Karnataka",
    "Schools with Atal Tinkering Lab in Mysore",
    "Kautilya Vidyalaya Fee Structure 2027-28",
    "Kautilya Vidyalaya Reviews and Ratings",
  ],
  authors: [{ name: "Kautilya Vidyalaya", url: "https://kautilyavidyalaya.edu.in" }],
  creator: "Kautilya Vidyalaya Group of Institutions",
  publisher: "Kautilya Vidyalaya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://kautilyavidyalaya.edu.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Kautilya Vidyalaya | Best CBSE School in Mysore | Admissions 2027-28",
    description:
      "Experience balanced, value-based schooling in Mysuru. Pre-Primary to Grade 10 with world-class science labs, Atal Tinkering Lab, and co-curricular excellence.",
    url: "https://kautilyavidyalaya.edu.in",
    siteName: "Kautilya Vidyalaya Mysore",
    images: [
      {
        url: "/images/kautilya-campus-reception.jpg",
        width: 1200,
        height: 630,
        alt: "Kautilya Vidyalaya Mysuru Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kautilya Vidyalaya | Best CBSE School in Mysore",
    description:
      "Admissions open for 2027-28. Nurturing future-ready students in Mysuru with holistic CBSE education and state-of-the-art facilities.",
    images: ["/images/kautilya-campus-reception.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Rich Structured Data Schema (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["School", "EducationalOrganization", "LocalBusiness"],
      "@id": "https://kautilyavidyalaya.edu.in/#organization",
      "name": "Kautilya Vidyalaya",
      "alternateName": "Kautilya Vidyalaya Group of Institutions",
      "url": "https://kautilyavidyalaya.edu.in",
      "logo": "https://kautilyavidyalaya.edu.in/images/kautilya-vidyalaya-logo.webp",
      "image": "https://kautilyavidyalaya.edu.in/images/kautilya-campus-reception.jpg",
      "description":
        "Kautilya Vidyalaya is a premier CBSE affiliated institution in Mysuru, Karnataka, providing value-based education from Kindergarten to Grade 10.",
      "telephone": ["+91-9900038358", "+91-7090671299", "0821-2460266"],
      "email": "admissions@kautilyavidyalaya.edu.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No 9/1, 13th Main, J Block, Kanakadasa Nagar, Dattagalli 3rd Stage",
        "addressLocality": "Mysuru",
        "addressRegion": "Karnataka",
        "postalCode": "570033",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.27436,
        "longitude": 76.610872,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "16:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:30",
          "closes": "13:00",
        },
      ],
      "sameAs": [
        "https://www.youtube.com/@kautilya_vidyalaya_official",
        "https://www.facebook.com/kautilyavidyalayamysore/",
        "https://www.instagram.com/kautilya_vidyalaya_official/",
      ],
      "priceRange": "₹₹",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "CBSE Affiliation No. 830193 (School Code: 45158)",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11418540333"
        />
        <Script
          id="google-tag-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11418540333');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col selection:bg-[#FFD907] selection:text-[#001744]">
        {children}
      </body>
    </html>
  );
}
