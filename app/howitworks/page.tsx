"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroCarousel from "../components/hero-carousel";
import ContactForm from "../components/ContactForm";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroCarousel />

      <section className="bg-black text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg max-w-2xl mx-auto">Ready to get your own custom knife? Here's how we make it happen.</p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Step 1: Send a Contact Form</h2>
          <p className="mb-4">Fill out the form below with your name, phone number, email, and a brief description of what you're looking for. I'd love to hear from you.</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Step 2: Research & Response</h2>
          <p className="mb-4">Once I receive your form, I'll research your request and reach back out to discuss your vision, options, pricing, and timelines.</p>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Step 3: Payment & Shipping</h2>
          <p className="mb-8">If you see a piece in stock that you're interested in purchasing, please reach out. We'll finalize payment and shipping fees to ensure your knife gets to you safely and efficiently.</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-medium mb-4">Contact Form</h3>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
