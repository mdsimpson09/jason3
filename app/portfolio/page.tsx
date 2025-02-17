"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import HeroCarousel from "../components/hero-carousel";
import Footer from "../components/footer";

const GalleryPage = () => {
  const carouselItems = [
    [{ image: '/assets/img/portfolio/IMG_2658.jpeg', title: 'Custom Chef Knife', price: '$350', description: 'Handcrafted chef knife with Damascus steel.' },
     { image: '/assets/img/portfolio/IMG_2658.jpeg', title: 'Santoku Knife', price: '$300', description: 'Perfect balance and sharpness for all needs.' },
     { image: '/assets/img/portfolio/pink.jpg', title: 'Hunting Knife', price: '$400', description: 'Rugged and durable, built for the outdoors.' }],



    [{ image: '/assets/img/portfolio/4.jpg', title: 'Utility Knife', price: '$250', description: 'Multi-purpose knife with ergonomic handle.' },
     { image: '/assets/img/portfolio/5.jpg', title: 'Fillet Knife', price: '$320', description: 'Flexible blade for precision cuts.' },
     { image: '/assets/img/portfolio/6.jpg', title: 'Carving Knife', price: '$280', description: 'Perfect for slicing meats with ease.' }],

    [{ image: '/assets/img/portfolio/7.jpg', title: 'Pocket Knife', price: '$200', description: 'Compact and sharp for everyday carry.' },
     { image: '/assets/img/portfolio/8.jpg', title: 'Boning Knife', price: '$310', description: 'Ideal for deboning meat and fish.' },
     { image: '/assets/img/portfolio/9.jpg', title: 'Paring Knife', price: '$180', description: 'Small and versatile for detailed tasks.' }],
  ];

  const gridItems = [
    { image: '/assets/img/portfolio/1.jpg', title: 'Knife 1', price: '$299', description: 'Description of Knife 1' },
    { image: '/assets/img/portfolio/2.jpg', title: 'Knife 2', price: '$349', description: 'Description of Knife 2' },
    { image: '/assets/img/portfolio/3.jpg', title: 'Knife 3', price: '$399', description: 'Description of Knife 3' },
    { image: '/assets/img/portfolio/4.jpg', title: 'Knife 4', price: '$279', description: 'Description of Knife 4' },
    { image: '/assets/img/portfolio/5.jpg', title: 'Knife 5', price: '$329', description: 'Description of Knife 5' },
    { image: '/assets/img/portfolio/6.jpg', title: 'Knife 6', price: '$289', description: 'Description of Knife 6' },
    { image: '/assets/img/portfolio/7.jpg', title: 'Knife 7', price: '$219', description: 'Description of Knife 7' },
    { image: '/assets/img/portfolio/8.jpg', title: 'Knife 8', price: '$359', description: 'Description of Knife 8' },
    { image: '/assets/img/portfolio/9.jpg', title: 'Knife 9', price: '$249', description: 'Description of Knife 9' },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroCarousel />

      {/* Carousels */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {carouselItems.map((carousel, index) => (
            <div key={index} className="space-y-4">
              {carousel.map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded shadow-sm text-center">
                  <Image src={item.image} alt={item.title} width={400} height={300} className="object-cover mx-auto" />
                  <h3 className="text-lg font-medium mt-2">{item.title}</h3>
                  <p className="text-gray-600">{item.price}</p>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-sm text-center">
              <Image src={item.image} alt={item.title} width={400} height={300} className="object-cover mx-auto" />
              <h3 className="text-lg font-medium mt-2">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;
