
import type { Metadata } from "next";
import { Suspense } from "react";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import WorkGallery from "@/components/work/WorkGallery/WorkGallery";
import WorkHeader from "@/components/work/WorkHeader/WorkHeader";

const description =
  "Selected pixel art by Noisechip, including characters, animations, environments, UI, illustrations and game mockups.";

export const metadata: Metadata = {
  title: "Work | Noisechip",
  description,
  alternates: {
    canonical: "/work/",
  },
  openGraph: {
    type: "website",
    siteName: "Noisechip",
    title: "Work | Noisechip",
    description,
    url: "/work/",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noisechip - Retro-Inspired Pixel Art for Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Noisechip",
    description,
    images: ["/og-image.png"],
  },
};

export default function WorkPage() {
  return (
    <>
      <WorkHeader />

      <Suspense fallback={null}>
        <WorkGallery />
      </Suspense>

      <BackToTop />
    </>
  );
}
