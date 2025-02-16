"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, User, ShoppingCart, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <button className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link className="text-lg hover:opacity-70" href="/about">
                  About
                </Link>
                <Link className="text-lg hover:opacity-70" href="/portfolio">
                  Portfolio
                </Link>
                <Link className="text-lg hover:opacity-70" href="/contact">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link
            href="/"
            className={`text-xl font-medium tracking-wider absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            WAYNICK KNIVES
          </Link>

          <div className="flex items-center space-x-6">
            <button className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>
            <button className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

