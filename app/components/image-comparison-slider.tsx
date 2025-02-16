"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface ImageComparisonSliderProps {
  imageOne: string
  imageTwo: string
  aspectRatio?: number
}

export default function ImageComparisonSlider({
  imageOne,
  imageTwo,
  aspectRatio = 16 / 9,
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    e.preventDefault() // Prevent text selection
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX)

  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX)

  useEffect(() => {
    const handleMouseMoveEvent = (e: MouseEvent) => handleMouseMove(e)
    const handleMouseUpEvent = () => handleMouseUp()
    const handleTouchMoveEvent = (e: TouchEvent) => handleTouchMove(e)
    const handleTouchEndEvent = () => handleMouseUp()

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMoveEvent)
      document.addEventListener("mouseup", handleMouseUpEvent)
      document.addEventListener("touchmove", handleTouchMoveEvent)
      document.addEventListener("touchend", handleTouchEndEvent)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveEvent)
      document.removeEventListener("mouseup", handleMouseUpEvent)
      document.removeEventListener("touchmove", handleTouchMoveEvent)
      document.removeEventListener("touchend", handleTouchEndEvent)
    }
  }, [isDragging])

  return (
    <div ref={containerRef} className="relative w-full cursor-ew-resize overflow-hidden" style={{ aspectRatio }}>
      <div className="relative w-full h-full">
        <Image src={"/assets/img/portfolio/green2.jpeg"} alt="Image One" fill className="object-cover" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full" style={{ opacity: sliderPosition / 100 }}>
        <Image src={"/assets/img/portfolio/closer-brown.jpg"} alt="Image Two" fill className="object-cover" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-6 h-px bg-gray-400" />
        </div>
      </div>
    </div>
  )
}

