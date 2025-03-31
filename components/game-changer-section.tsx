import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GameChangerSection() {
  return (
    <section className="py-20 bg-[#1a1145]">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/footer_main.jpeg"
            alt="Be The Game Changer"
            width={500}
            height={500}
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
        <div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            BE THE GAME CHANGER
          </h2>
          <p className="text-lg mb-6 text-gray-200" style={{ fontFamily: "Poppins, sans-serif" }}>
            Join the most prestigious cricket tournament in Bengal and showcase your talent on a grand stage.
          </p>
          <p className="text-lg mb-8 text-gray-200" style={{ fontFamily: "Poppins, sans-serif" }}>
            The Bengal Elite League is more than just a tournament - it&apos;s a platform for cricketers to shine and
            make their mark.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] font-bold cursor-pointer">
                Register Your Team
              </Button>
            </Link>
            <Link href={"/bronchure.pdf"} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 cursor-pointer"
              >
                Download Brochure
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}