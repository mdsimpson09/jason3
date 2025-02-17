import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroCarousel from "../components/hero-carousel";

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />

      <section className="py-24 bg-gray-50 text-center">
        <h1 className="text-4xl font-light tracking-wider mb-4">Our Process</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Every Knife is a one-of-a-kind masterpiece crafted with care, ensuring each blade is a unique heirloom built to last for generations.
        </p>
      </section>

      <section className="py-24 bg-white grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4">
        <div>
          <Image src="/assets/img/portfolio/hand1.jpg" alt="Templated Design" width={400} height={300} className="object-cover rounded-lg" />
          <h3 className="text-xl font-light mt-4">Templated Design</h3>
          <p className="text-gray-600 mt-2">
            From blueprint to band saw, I craft knives with precision using stainless or high carbon steel in full or hidden tang styles.
          </p>
        </div>
        <div>
          <Image src="/assets/img/portfolio/hand2.jpg" alt="Hand Forged" width={400} height={300} className="object-cover rounded-lg" />
          <h3 className="text-xl font-light mt-4">Hand Forged</h3>
          <p className="text-gray-600 mt-2">
            Forging moves metal into shape by hand hammering carbon steel, offering full, hidden, and integral tang styles.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 text-center grid grid-cols-1 container mx-auto px-4">
        <h2 className="text-3xl font-light tracking-wider mb-4">Built to Last</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Handcrafted in Nashville, Tennessee — in my in-home workshop.
        </p>
        <div className="mt-8">
          <Image src="/assets/img/portfolio/IMG_1310.jpg" alt="Built to Last" width={500} height={350} className="object-cover rounded-lg mx-auto" />
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-light tracking-wider mb-4">Evenheat Kilns</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          I use Evenheat Kilns to ensure precise and consistent heat treatment, enhancing the durability and performance of each knife.
        </p>
        <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4">
          <div>
            <Image src="/assets/img/portfolio/kiln1.jpg" alt="Evenheat Kiln in Workshop" width={400} height={300} className="object-cover rounded-lg" />
            <h3 className="text-xl font-light mt-4">Precision Heating</h3>
            <p className="text-gray-600 mt-2">Each blade is heat-treated with precision for superior strength and flexibility.</p>
          </div>
          <div>
            <Image src="/assets/img/portfolio/kiln2.jpg" alt="Knife Heat Treatment" width={400} height={300} className="object-cover rounded-lg" />
            <h3 className="text-xl font-light mt-4">Quality Craftsmanship</h3>
            <p className="text-gray-600 mt-2">Our kiln processes ensure each knife meets the highest standards of quality.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 grid md:grid-cols-2 gap-8 container mx-auto px-4">
        <div>
          <Image src="/assets/img/portfolio/IMG_5412.jpg" alt="Full Tang Knives" width={400} height={300} className="object-cover rounded-lg" />
          <h3 className="text-xl font-light mt-4">Full Tang Kitchen Knives</h3>
          <p className="text-gray-600 mt-2">
            Full tang knives have steel running the length of the handle, with scales fastened on either side, allowing spine file work.
          </p>
        </div>
        <div>
          <Image src="/assets/img/portfolio/IMG_8346.jpeg" alt="Hidden Tang Knives" width={400} height={300} className="object-cover rounded-lg" />
          <h3 className="text-xl font-light mt-4">Hidden Tang</h3>
          <p className="text-gray-600 mt-2">
            Hidden tang knives have no visible steel in the handle, with the tang encased, common in forged and Damascus steel knives.
          </p>
        </div>
      </section>
<br></br>
      <Footer />
    </main>
  );
}



