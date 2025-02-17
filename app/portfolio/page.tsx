"use client"

import Image from "next/image"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HeroCarousel from "../components/hero-carousel"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"



const GalleryPage = () => {
  const carouselItems = [
    {
      images: [
        "/assets/img/portfolio/pink.jpg",
        "/assets/img/portfolio/IMG_2665.jpeg",
        "/assets/img/portfolio/IMG_2658.jpeg",
      ],
      title: "1084 steel paring knife.",
      price: "",
      description: "Pink birdseye maple/green g10 liners. First knive of 2025",
    },
    {
      images: [
        "/assets/img/portfolio/blackbelt.jpg",
        "/assets/img/portfolio/IMG_8343.jpeg",
        "/assets/img/portfolio/IMG_8346.jpeg",
      ],
      title: "Black Belt Style Knife",
      price: "",
      description:
        "The white stripes reflect his third degree black belt in Brazilian Jiu Jitsu. Stonewashed 1084 steel blade with Linen Micarta/G10 handle.",
    },
    {
      images: [
        "/assets/img/portfolio/IMG_1315.jpeg",
        "/assets/img/portfolio/IMG_1310.jpg",
        "/assets/img/portfolio/3rd.jpg",
      ],
      title: " 1084 carbon steel blade",
      price: "",
      description: "brass bolster, stamped leather sheath. Ram 🐏 horn handle from NY Shed Antlers ",
    },
    {
      images: ["/assets/img/portfolio/brown.jpg", "/assets/img/portfolio/close-brown.jpg"],
      title: "Kitchen Utility knife.",
      price: "",
      description: "1084 Carbon Steel with Spalted Oak Burl handle.",
    },
    {
      images: [
        "/assets/img/portfolio/IMG_1829.jpeg",
        "/assets/img/portfolio/IMG_1830.jpeg",
        "/assets/img/portfolio/IMG_1835.jpeg",
      ],
      title: "1084 with maple burl",
      price: "",
      description: "Made with epoxy handle. ",
    },
    {
      images: [
        "/assets/img/portfolio/green2.jpeg",
        "/assets/img/portfolio/IMG_1849.jpeg",
        "/assets/img/portfolio/IMG_1844.jpeg",
      ],
      title: "1084",
      price: "",
      description: "Made with dyed maple burle.",
    },
    {
      images: ["/assets/img/portfolio/lime1.jpg", "/assets/img/portfolio/lime2.jpg"],
      title: "1084",
      price: "",
      description: "made with dyed maple burle.",
    },
    {
      images: ["/assets/img/portfolio/IMG_6844.jpeg", "/assets/img/portfolio/IMG_6841.jpeg"],
      title: "Letter Opener",
      price: "",
      description: "Forged 1084, mule deer antler, brass, canvas micarta. ",
    },
    {
      images: ["/assets/img/portfolio/butter.jpg", "/assets/img/portfolio/butter1.jpg"],
      title: "Butter Knife",
      price: "",
      description: "I just wanted to eat some butter.",
    },
  ]

  const [currentIndices, setCurrentIndices] = useState(Array(carouselItems.length).fill(0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prev) => prev.map((index, i) => (index + 1) % carouselItems[i].images.length))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroCarousel />

    <section className="py-12 bg-gray-50">
    
        <div className="text-center mb-16">
          <span className="text-lg uppercase tracking-widest text-gray-600">In The</span>
          <h2 className="-mb-20 text-4xl font-light tracking-wider mt-2">GALLERY</h2>
        </div>
        </section>

      <section className="py-12 bg-white m-4">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carouselItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="aspect-[4/3] relative rounded shadow-md overflow-hidden">
                {item.images.map((img, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      i === currentIndices[index] ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image src={img || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-gray-700 text-lg">{item.price}</p>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      

      <div className="flex justify-center mt-20">
        <Link href="/contact">
          <Button
            variant="outline"
            className="px-12 py-5 text-lg font-medium border-2 border-black text-black bg-white hover:bg-black hover:text-white transition-colors duration-300"
          >
            Get Yours Today
          </Button>
        </Link>
      </div>
      </section>
         
      <Footer />
    </main>
  )
}

export default GalleryPage

