import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#150237] text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Header />
      
      {/* Hero Section - Added more responsive padding and text sizes */}
      <section className="relative pt-40 pb-30 md:py-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover_main.png"
            alt="Cricket Stadium"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-yellow-400" style={{ fontFamily: "Poppins, sans-serif" }}>
              About Bengal Elite League
            </h1>
            <div className="h-1 w-24 md:w-32 bg-yellow-500 mx-auto mb-4 md:mb-8"></div>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
              The premier cricket tournament in Bengal, bringing together talent, passion, and sportsmanship.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision - Improved mobile layout */}
      <section className="py-12 md:py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-yellow-400">Our Mission & Vision</h2>
              <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-200">
                Bengal Elite League was founded with a clear mission: to elevate cricket in Bengal to new heights by providing a professional platform for talented players to showcase their skills.
              </p>
              <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-200">
                Our vision is to become the most prestigious cricket tournament in Eastern India, known for discovering and nurturing cricket talent while promoting the spirit of sportsmanship and fair play.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
                <div className="bg-[#2a1a55] p-3 md:p-4 rounded-lg border border-yellow-500/20 flex-1 text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-yellow-400">Excellence</h3>
                  <p className="text-xs md:text-sm text-gray-300">Striving for the highest standards in every aspect</p>
                </div>
                <div className="bg-[#2a1a55] p-3 md:p-4 rounded-lg border border-yellow-500/20 flex-1 text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-yellow-400">Integrity</h3>
                  <p className="text-xs md:text-sm text-gray-300">Upholding fairness and transparency in all our actions</p>
                </div>
                <div className="bg-[#2a1a55] p-3 md:p-4 rounded-lg border border-yellow-500/20 flex-1 text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-yellow-400">Community</h3>
                  <p className="text-xs md:text-sm text-gray-300">Building a stronger cricket community in Bengal</p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-yellow-500/20 rounded-lg hidden sm:block"></div>
              <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-yellow-500/20 rounded-lg hidden sm:block"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 md:border-4 border-yellow-500">
                <Image
                  src="/mission.png"
                  alt="Cricket Match"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story - Improved timeline for mobile */}
      <section 
        className="py-12 md:py-16 bg-[#150237] bg-cover bg-center" 
        style={{ backgroundImage: 'url(cover_main.png)' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-yellow-400">Our Story</h2>
            <div className="h-1 w-16 md:w-20 bg-yellow-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-200">
              From humble beginnings to becoming Bengal&apos;s premier cricket tournament
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline - Hidden on mobile, visible on larger screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500/30 hidden md:block"></div>
            
            <div className="grid grid-cols-1 gap-8 md:gap-12">              
              {/* 2025 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <div className="bg-yellow-500 text-[#1a1145] font-bold text-lg md:text-xl py-1 md:py-2 px-4 md:px-6 rounded-full z-10">
                    2025
                  </div>
                </div>
                <div className="bg-[#2a1a55] p-4 md:p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-yellow-400">The Elite League</h3>
                  <p className="text-sm md:text-base text-gray-200">
                    Today, Bengal Elite League stands as the premier cricket tournament in the region with 16 teams, professional organization, substantial prize money, and live coverage. The tournament has become a launchpad for cricket careers and a celebration of Bengal&apos;s cricket culture.
                  </p>
                  <p style={{ textAlign: "center" }}>@2025 BD Networks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Mobile-friendly buttons */}
      <section className="py-12 md:py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-yellow-400">Be Part of the Cricket Revolution</h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto text-gray-200">
            Join us in celebrating cricket and supporting local talent. Register your team for the upcoming tournament or partner with us as a sponsor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-base md:text-lg font-bold px-6 py-4 md:px-8 md:py-6">
                Register Your Team
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-base md:text-lg font-bold px-6 py-4 md:px-8 md:py-6"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}