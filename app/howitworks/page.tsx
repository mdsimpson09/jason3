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

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Step 1: Send a Contact Form</h2>
          <p className="-mb-8 text-lg">Fill out the form below with your name, phone number, email, and a brief message.</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Step 2: Research </h2>
          <p className="-mb-8 text-lg">Once I receive your message, if you're looking for a custom piece, I'll reach out to you to discuss what this process may look like. This may involve a few more conversations as I spend time researching the information I need to complete your custome piece. </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Step 3: Payment & Shipping</h2>
          <p className="mb-4 text-lg">I'll reach back out to you to go over the price and set up payment and shipping details.  </p>
            <p className="mb-2 text-lg">
            
            Additionally, If you see a piece in stock that you're interested in purchasing, please reach out. We'll finalize payment and shipping fees to ensure your knife gets to you safely and efficiently.</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-medium mb-12 text-center justify-center flex text-gray-800">Ready to craft your perfect blade? Reach out today to start your custom knife order and let’s create something truly unique together!</h3>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
