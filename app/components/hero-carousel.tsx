"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const images = [
  "/assets/img/portfolio/blackbelt2.jpg",
  "/assets/img/portfolio/pink.jpg",
  "/assets/img/portfolio/IMG_6844.jpeg",
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[70vh]">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Hero image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <p className="text-sm uppercase tracking-widest mb-4">Handcrafted Precision </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-8">WAYNICK KNIVES</h1>

        <Link href="/contact" passHref>
          <button className="border border-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
          Order Yours Today
          </button>
        </Link>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
