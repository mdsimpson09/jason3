"use client"

import React from "react"
import Image from "next/image"

interface PortfolioItemProps {
  imageSrc: string
  title: string
  price: string
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imageSrc, title, price }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden">
        <Image src={imageSrc} alt={title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
      </div>
      <h3 className="text-lg font-light tracking-wider text-center text-black">{title}</h3>
      <p className="text-sm text-black text-center mt-1">{price}</p>
    </div>
  )
}

interface PortfolioGridProps {
  items: PortfolioItemProps[]
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-gray-600">In The</span>
          <h2 className="-mb-20 text-3xl font-light tracking-wider mt-2 text-gray-800">SPOTLIGHT</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioGrid;