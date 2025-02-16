"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

interface NavigationBoxProps {
  title: string
  href: string
  imageSrc: string
}

const NavigationBox: React.FC<NavigationBoxProps> = ({ title, href, imageSrc }) => {
  return (
    <div className="relative aspect-square group">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <Link
          href={href}
          className="border-2 border-white px-8 py-3 text-sm text-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
        >
          {title}
        </Link>
      </div>
    </div>
  )
}

interface NavigationGridProps {
  boxes: NavigationBoxProps[]
}

const NavigationGrid: React.FC<NavigationGridProps> = ({ boxes }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boxes.map((box, index) => (
            <NavigationBox key={index} {...box} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NavigationGrid;
