// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Search, Instagram, Facebook, Menu } from "lucide-react"
// import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
//         isScrolled ? "bg-white shadow-sm" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex items-center justify-between">
//           <Sheet>
//             <SheetTrigger asChild>
//               <button className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Open menu</span>
//               </button>
//             </SheetTrigger>
//             <SheetContent side="left">
//               <nav className="flex flex-col gap-4 mt-8">
//                 <Link className="text-lg hover:opacity-70" href="/about">
//                   About
//                 </Link>
//                 <Link className="text-lg hover:opacity-70" href="/portfolio">
//                   Portfolio
//                 </Link>
//                 <Link className="text-lg hover:opacity-70" href="/contact">
//                   Contact
//                 </Link>
//               </nav>
//             </SheetContent>
//           </Sheet>

//           <Link
//             href="/"
//             className={`text-xl font-medium tracking-wider absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
//               isScrolled ? "text-black" : "text-white"
//             }`}
//           >
//             WAYNICK KNIVES
//           </Link>

   
//           <div className="flex items-center space-x-6">
    
//           <Link
//             href="https://www.instagram.com/jasonwaynick/?hl=en"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}
//           >
//             <Instagram className="w-5 h-5" />
//             <span className="sr-only">Instagram</span>
//           </Link>
//           <Link
//             href="https://www.facebook.com/jason.waynick.7"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}
//           >
//             <Facebook className="w-5 h-5" />
//             <span className="sr-only">Facebook</span>
//           </Link>
       
//       </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Instagram, Facebook, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 max-w-sm bg-white shadow-lg" style={{ backdropFilter: 'blur(4px)' }}>
              <button onClick={closeMenu} className="absolute top-4 left-4 text-black hover:opacity-70">
                <X className="h-6 w-6" />
              </button>
              <nav className="flex flex-col mt-16 space-y-4 border-t border-gray-400 pt-4 text-black">
                <Link onClick={closeMenu} className="text-lg hover:opacity-70 border-b border-gray-400 pb-2" href="/about">About</Link>
                <Link onClick={closeMenu} className="text-lg hover:opacity-70 border-b border-gray-400 pb-2" href="/portfolio">Gallery</Link>
                <Link onClick={closeMenu} className="text-lg hover:opacity-70 border-b border-gray-400 pb-2" href="/process">My Process</Link>
                <Link onClick={closeMenu} className="text-lg hover:opacity-70 border-b border-gray-400 pb-2" href="/howitworks">How it works</Link>
                <Link onClick={closeMenu} className="text-lg hover:opacity-70 border-b border-gray-400 pb-2" href="/contact">Contact</Link>
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
            <Link href="https://www.instagram.com/jasonwaynick/?hl=en" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.facebook.com/jason.waynick.7" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70`}>
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
