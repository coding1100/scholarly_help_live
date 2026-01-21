"use client";
import React from "react";
import ThankYou from "@/app/components/ThankYou/ThankYou";
import MainLayout from "@/app/MainLayout";
import ClientScripts from "@/app/components/ClientScripts";

const Page = () => {
  return (
    <MainLayout>
      <ThankYou />
      {/* Load chat widget scripts only on thank-you page */}
      <ClientScripts />
    </MainLayout>
  );
};

export default Page;
