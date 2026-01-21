import dynamic from "next/dynamic";
import React from "react";

const LoadingSkeleton = ({ height = "400px" }: { height?: string }) => (
  <div className="w-full animate-pulse bg-gray-100" style={{ minHeight: height }} />
);

export const CardCarousel = dynamic(
  () => import("./CardCarousel"),
  {
    ssr: false,
    loading: () => <LoadingSkeleton height="600px" />,
  }
);

export const CustomerReviews = dynamic(
  () => import("./CustomerReviews"),
  {
    ssr: false,
    loading: () => <LoadingSkeleton height="500px" />,
  }
);
