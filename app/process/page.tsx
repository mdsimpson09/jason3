"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroCarousel from "../components/hero-carousel";
import Link from "next/link";

export default function HowItWorks() {
  useEffect(() => {
    // Load JotForm script
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/250466036016147";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroCarousel />

      {/* ... (rest of your JSX remains the same) ... */}

      <div className="mt-8">
        <h3 className="text-xl font-medium mb-4">Contact Form</h3>
        <div id="jotform-250466036016147"></div>
      </div>

      {/* ... (rest of your JSX remains the same) ... */}

      <Footer />
    </div>
  );
}