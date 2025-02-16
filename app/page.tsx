import Image from "next/image"
import Link from "next/link"
import Navbar from "./components/navbar"
import HeroCarousel from "./components/hero-carousel"
import ImageComparisonSlider from "./components/image-comparison-slider"
import Footer from "./components/footer"
import PortfolioGrid from "./components/portfolioGrid"
import NavigationGrid from "./components/NavigationGrid"



const portfolioItems = [
  { imageSrc: "/assets/img/portfolio/1.jpg", title: "CHEF'S KNIFE", price: "" },
  { imageSrc: "/assets/img/portfolio/2.jpg", title: "PARING KNIFE", price: "" },
  { imageSrc: "/assets/img/portfolio/3.jpg", title: "BREAD KNIFE", price: "" },
  { imageSrc: "/assets/img/portfolio/IMG_1315.jpeg", title: "BONING KNIFE", price: "" },
  { imageSrc: "/assets/img/portfolio/IMG_1830.jpeg", title: "SANTOKU KNIFE", price: "" },
  { imageSrc: "/assets/img/portfolio/IMG_7804.jpg", title: "UTILITY KNIFE", price: "" },
];

const navigationBoxes = [
  { title: "The Process", href: "/process", imageSrc: "/assets/img/about/4.jpg" },
  { title: "How It Works", href: "/how-it-works", imageSrc: "/assets/img/header-bg.jpg" },
  { title: "About", href: "/about", imageSrc: "/assets/img/team/jason.jpg" },
  { title: "Contact", href: "/contact", imageSrc: "/assets/img/portfolio/pinkish.jpg" },
];


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />

 {/* Portfolio Grid */}
 <PortfolioGrid items={portfolioItems} />

      {/* Portfolio Grid
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-gray-600">Explore Our</span>
            <h2 className="text-3xl font-light tracking-wider mt-2">SIGNATURE STYLES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                  <Image
                    src={`/assets/img/portfolio/1.jpg`}
                    alt="Knife profile"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-light tracking-wider text-center">CHEF'S KNIFE</h3>
                <p className="text-sm text-gray-600 text-center mt-1">From $299</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light tracking-wider mb-6">HOW IT WORKS</h2>
            <p className="text-gray-600 mb-12">
              Whether you're interested in our signature collection or dreaming of a custom piece, we're here to bring
              your vision to life.
            </p>
            <div className="grid gap-8 mb-12">
              <div className="p-8 bg-white shadow-sm">
                <h3 className="text-xl font-light mb-4">Custom Design Process</h3>
                <p className="text-gray-600 mb-4">
                  Share your ideas with Jason and collaborate on creating your perfect knife. From initial concept to
                  final details, we'll work together to craft exactly what you envision.
                </p>
              </div>
              <div className="p-8 bg-white shadow-sm">
                <h3 className="text-xl font-light mb-4">Featured Collection</h3>
                <p className="text-gray-600 mb-4">
                  Explore our signature collection of meticulously crafted knives, each one representing our commitment
                  to quality and design.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block border-2 border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              Contact Here
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image src="/assets/img/portfolio/IMG_8346.jpeg" alt="Featured knife" fill className="object-cover" />
            </div>
            <div className="max-w-xl">
              <h2 className="text-3xl font-light tracking-wider mb-6">FEATURED PRODUCT</h2>
              <p className="text-gray-600 mb-8">
                The Black Belt Series represents a cross-over of the craft celebrating two major parts of my life. Each knife is meticulously forged and finished
                by hand, and custom made for each customer.
              </p>
              <Link
                href="/portfolio"
                className="inline-block border-2 border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ImageComparisonSlider
              imageOne="/portfolio/comparison-1.jpg"
              imageTwo="/portfolio/comparison-2.jpg"
              aspectRatio={16 / 9}
            />
          </div>
        </div>
      </section>

      {/* Navigation Boxes */}
      <NavigationGrid boxes={navigationBoxes} />


      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "The Process", href: "/process" },
              { title: "How It Works", href: "/how-it-works" },
              { title: "About", href: "/about" },
              { title: "Contact", href: "/contact" },
            ].map((item) => (
              <div key={item.title} className="relative aspect-square group">
                <Image
                  src={`/portfolio/${item.title.toLowerCase().replace(" ", "-")}-bg.jpg`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-x-0 bottom-8 flex justify-center">
                  <Link
                    href={item.href}
                    className="border-2 border-white px-8 py-3 text-sm text-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}

