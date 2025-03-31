import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ImageSection() {
  return (
    <div className="min-h-screen bg-[#150237] text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            <Header />
            <br />
            <section className="py-16 bg-[#1a1145] flex justify-center">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                <div className="border-4 border-yellow-500 rounded-lg overflow-hidden shadow-lg">
                    <Image src="/prize.png" alt="Tournament Poster" width={800} height={600} className="object-cover" />
                </div>
                </div>
            </div>
            </section>
            <Footer />
    </div>
  )
}
