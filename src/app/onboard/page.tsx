"use client";

import OnboardingForm from "@/app/components/OnboardingForm";
import Header from "../components/Header";

export default function OnboardingPage() {
  return (
    <>
    <Header />
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Artist Onboarding</h1>
      <OnboardingForm />
    </div>
    </>
  );
}
