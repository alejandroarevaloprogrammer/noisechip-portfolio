import type { Metadata } from "next";
import { Suspense } from "react";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import WorkGallery from "@/components/work/WorkGallery/WorkGallery";
import WorkHeader from "@/components/work/WorkHeader/WorkHeader";

export const metadata: Metadata = {
  title: "Work | Noisechip",
  description:
    "Selected pixel art by Noisechip, including characters, animations, environments, UI, illustrations and game mockups.",
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