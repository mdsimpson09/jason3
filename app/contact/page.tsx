"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroCarousel from "../components/hero-carousel";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <section className="container mx-auto px-4 py-12 bg-white">
        <h3 className="text-2xl font-medium mb-4 text-center p-4 text-gray-800">
          Ready to craft your perfect blade? Reach out today to start your custom knife order and let’s create something truly unique together!
        </h3>
        </section >

        <section className="container mx-auto px-4 py-12 bg-gray-100 mb-8">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
