import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
              <div className="-mt-10">
                 <Image
                   src="/assets/img/logos/8.png"
                   alt="Jason working on a knife"
                   width={200}
                   height={200}
                   
                   className="object-cover"
                 />
               </div>
               </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4 text-gray-800">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/shop" className="text-sm text-gray-600 hover:text-gray-900">
                Shop
              </Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Link href="/portfolio" className="text-sm text-gray-600 hover:text-gray-900">
                Portfolio
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-medium mb-4 text-gray-800">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/jasonwaynick/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/jason.waynick.7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
          <div>
            <h3 className="font-medium mb-4 text-gray-800">Contact</h3>
            <p className="text-sm text-gray-600">
              Email: jdwaynick@gmail.com
              <br />
              Phone: (615) 506-2336
              <br />
              Location: Nashville, TN
            </p>
          </div>

          </div>
        </div>

        <div className="mt-8 pt-4 -mb-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Waynick Knives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

