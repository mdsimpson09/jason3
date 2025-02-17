
"use client"

import Image from "next/image"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HeroCarousel from "../components/hero-carousel"

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light tracking-wider text-center mb-8">About Jason Waynick</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Bladesmith, Brazilian Jiu-Jitsu Purple Belt, Surfer, Family Man, and Crafting Badass.
          </p>
        </div>
      </section>

      {/* Bladesmith Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="/assets/img/portfolio/IMG_7804.jpg"
                alt="Jason working on a knife"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-wider mb-6">The Bladesmith</h2>
              <p className="text-gray-600 mb-4">
                Jason Waynick is a passionate bladesmith based in Nashville, Tennessee. With years of experience and a
                keen eye for detail, Jason crafts unique, high-quality knives that blend functionality with artistry.
              </p>
              <p className="text-gray-600">
                From kitchen utility knives to custom designs, each piece is meticulously forged and finished by hand,
                reflecting Jason's commitment to quality and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BJJ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative aspect-square">
              <Image src="/assets/img/portfolio/bjj.jpg" alt="Jason practicing BJJ" fill className="object-cover" />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-light tracking-wider mb-6">Brazilian Jiu-Jitsu Enthusiast</h2>
              <p className="text-gray-600 mb-4">
                When he's not in the workshop, Jason is often found on the mats. He attempts to bring the same focus and
                discipline to his training as he does to his bladesmithing. His crafting is often better quality.
              </p>
              <p className="text-gray-600">
                Jason's passion for BJJ even influences his craft, as seen in his special edition Black Belt knives
                designed to celebrate milestones of his friends and coaches in the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Surfing and Family Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image src="/assets/img/portfolio/surf.jpg" alt="Jason surfing" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-wider mb-6">Surfer and Family Man</h2>
              <p className="text-gray-600 mb-4">
                Beyond the forge and the gym, Jason finds balance in life through surfing and spending time with his
                family. The ocean provides a source of inspiration and rejuvenation.
              </p>
              <p className="text-gray-600">
                As a devoted family man, Jason values the support and inspiration he receives from his loved ones,
                especially his son, who shares his father's curiosity and passion for life.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* New Photo Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative aspect-square">
              <Image
                src="/assets/img/portfolio/family.jpg"
                alt="Jason in his workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-light tracking-wider mb-6">Crafting with Passion</h2>
              <p className="text-gray-600 mb-4">
                In his Nashville workshop, Jason brings together the influences of his varied interests - the precision
                of martial arts, the flow of surfing, and the warmth of family - to create knives that are truly unique.
              </p>
              <p className="text-gray-600">
                Each blade is a testament to Jason's dedication to his craft and his commitment to creating tools that
                are both functional works of art and lasting heirlooms.
              </p>
            </div>
          </div>
        </div>
      </section>
       {/* Quote Section */}
       <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl font-light italic max-w-3xl mx-auto">
            "Every knife I create is a reflection of my passion for craftsmanship, my love for martial arts, and the joy
            I find in life's simple pleasures. It's not just about making a tool; it's about creating a piece of art
            that tells a story."
          </blockquote>
          <p className="mt-4 text-gray-600">- Jason Waynick</p>
        </div>
      </section>
      <br></br>

      <Footer />
    </main>
  )
}

export default AboutPage





// "use client"

// import Image from "next/image"
// import Navbar from "../components/navbar"
// import Footer from "../components/footer"
// import HeroCarousel from "../components/hero-carousel"

// const AboutPage = () => {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
//     <HeroCarousel />
//       {/* Hero Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-light tracking-wider text-center mb-8">About Jason Waynick</h1>
//           <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
//             Bladesmith, Brazilian Jiu-Jitsu Purple Belt, Surfer, Family Man, and Crafting Badass.
//           </p>
//         </div>
//       </section>

//       {/* Bladesmith Section */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative aspect-square">
//               <Image
//                 src="/assets/img/about/jason-bladesmith.jpg"
//                 alt="Jason working on a knife"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-light tracking-wider mb-6">The Bladesmith</h2>
//               <p className="text-gray-600 mb-4">
//                 Jason Waynick is a passionate bladesmith based in Nashville, Tennessee. With years of experience and a
//                 keen eye for detail, Jason crafts unique, high-quality knives that blend functionality with artistry.
//               </p>
//               <p className="text-gray-600">
//                 From kitchen utility knives to custom designs, each piece is meticulously forged and finished by hand,
//                 reflecting Jason's commitment to quality and craftsmanship.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* BJJ Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="md:order-2 relative aspect-square">
//               <Image src="/assets/img/about/jason-bjj.jpg" alt="Jason practicing BJJ" fill className="object-cover" />
//             </div>
//             <div className="md:order-1">
//               <h2 className="text-3xl font-light tracking-wider mb-6">Brazilian Jiu-Jitsu Enthusiast</h2>
//               <p className="text-gray-600 mb-4">
//                 When he's not in the workshop, Jason is often found on the mats. He attempts to bring the same focus and discipline to his training as he does to his
//                 bladesmithing. His crafting is often better quality. 
//               </p>
//               <p className="text-gray-600">
//                 Jason's passion for BJJ even influences his craft, as seen in his special edition Black Belt knives designed to
//                 celebrate milestones of his friends and coaches in the community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Surfing and Family Section */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative aspect-square">
//               <Image src="/assets/img/about/jason-surfing.jpg" alt="Jason surfing" fill className="object-cover" />
//             </div>
//             <div>
//               <h2 className="text-3xl font-light tracking-wider mb-6">Surfer and Family Man</h2>
//               <p className="text-gray-600 mb-4">
//                 Beyond the forge and the gym, Jason finds balance in life through surfing and spending time with his
//                 family. The ocean provides a source of inspiration and rejuvenation.
//               </p>
//               <p className="text-gray-600">
//                 As a devoted family man, Jason values the support and inspiration he receives from his loved ones,
//                 especially his son, who shares his father's curiosity and passion for life.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quote Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-4 text-center">
//           <blockquote className="text-2xl font-light italic max-w-3xl mx-auto">
//             "Every knife I create is a reflection of my passion for craftsmanship, my love for martial arts, and the joy
//             I find in life's simple pleasures. It's not just about making a tool; it's about creating a piece of art
//             that tells a story."
//           </blockquote>
//           <p className="mt-4 text-gray-600">- Jason Waynick</p>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

// export default AboutPage
