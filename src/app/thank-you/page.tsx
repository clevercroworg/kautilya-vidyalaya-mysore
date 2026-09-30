import { Metadata } from "next";
import Script from "next/script";
import ThankYouClientView from "@/components/thank-you/ThankYouClientView";

export const metadata: Metadata = {
  title: "Thank You | Admission Enquiry Submitted | Kautilya Vidyalaya",
  description:
    "Thank you for contacting Kautilya Vidyalaya Mysuru. Your admission inquiry has been received, and our admissions team will contact you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Event snippet for Submit lead form conversion page */}
      <Script
        id="google-ads-conversion-thank-you"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('event', 'conversion', {'send_to': 'AW-11418540333/cGUrCOnowfgYEK2y5MQq'});
          `,
        }}
      />
      <ThankYouClientView />
    </>
  );
}
