import Image from "next/image"

export default function ImageSection() {
  return (
    <section className="py-16 bg-[#1a1145] flex justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="border-4 border-yellow-500 rounded-lg overflow-hidden shadow-lg">
            <Image src="/prize.png" alt="Tournament Poster" width={800} height={600} className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

