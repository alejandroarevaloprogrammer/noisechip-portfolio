import { Suspense } from "react";
import WorkGallery from "@/components/work/WorkGallery/WorkGallery";
import WorkHeader from "@/components/work/WorkHeader/WorkHeader";

export default function WorkPage() {
  return (
    <>
      <WorkHeader />

      <Suspense fallback={null}>
        <WorkGallery />
      </Suspense>
    </>
  );
}