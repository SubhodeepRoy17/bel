import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#150237] text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover_main.png"
            alt="Cricket Stadium"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400" style={{ fontFamily: "Poppins, sans-serif" }}>
              About Bengal Elite League
            </h1>
            <div className="h-1 w-32 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl mb-8 text-gray-200">
              The premier cricket tournament in Bengal, bringing together talent, passion, and sportsmanship.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">Our Mission & Vision</h2>
              <p className="text-lg mb-6 text-gray-200">
                Bengal Elite League was founded with a clear mission: to elevate cricket in Bengal to new heights by providing a professional platform for talented players to showcase their skills.
              </p>
              <p className="text-lg mb-6 text-gray-200">
                Our vision is to become the most prestigious cricket tournament in Eastern India, known for discovering and nurturing cricket talent while promoting the spirit of sportsmanship and fair play.
              </p>
              <div className="flex gap-4 mt-8">
                <div className="bg-[#2a1a55] p-4 rounded-lg border border-yellow-500/20 flex-1 text-center">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Excellence</h3>
                  <p className="text-sm text-gray-300">Striving for the highest standards in every aspect</p>
                </div>
                <div className="bg-[#2a1a55] p-4 rounded-lg border border-yellow-500/20 flex-1 text-center">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Integrity</h3>
                  <p className="text-sm text-gray-300">Upholding fairness and transparency in all our actions</p>
                </div>
                <div className="bg-[#2a1a55] p-4 rounded-lg border border-yellow-500/20 flex-1 text-center">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Community</h3>
                  <p className="text-sm text-gray-300">Building a stronger cricket community in Bengal</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500/20 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-4 border-yellow-500">
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
      
      {/* Our Story */}
      <section 
        className="py-16 bg-[#150237] bg-cover bg-center" 
        style={{ backgroundImage: 'url(cover_main.png)' }}
        >
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Our Story</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-200">
                From humble beginnings to becoming Bengal&apos;s premier cricket tournament
            </p>
            </div>
            
            <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500/30"></div>
            
            <div className="grid grid-cols-1 gap-12">
                {/* 2020 */}
                <div className="relative">
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-yellow-500 text-[#1a1145] font-bold text-xl py-2 px-6 rounded-full z-10">
                    2020
                    </div>
                </div>
                <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400">The Beginning</h3>
                    <p className="text-gray-200">
                    Bengal Elite League was conceptualized by a group of cricket enthusiasts who wanted to create a platform for local talent. The idea was to organize a tournament that would combine the excitement of T20 cricket with the raw talent of Bengal.
                    </p>
                </div>
                </div>
                
                {/* 2021 */}
                <div className="relative">
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-yellow-500 text-[#1a1145] font-bold text-xl py-2 px-6 rounded-full z-10">
                    2021
                    </div>
                </div>
                <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400">First Tournament</h3>
                    <p className="text-gray-200">
                    The inaugural tournament was held with 8 teams participating. Despite limited resources, the tournament was a huge success, attracting local media attention and cricket enthusiasts from across the region.
                    </p>
                </div>
                </div>
                
                {/* 2023 */}
                <div className="relative">
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-yellow-500 text-[#1a1145] font-bold text-xl py-2 px-6 rounded-full z-10">
                    2023
                    </div>
                </div>
                <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400">Growth & Recognition</h3>
                    <p className="text-gray-200">
                    By 2023, the tournament had grown to include 12 teams and gained recognition from cricket associations. Several players who participated in BEL went on to play at higher levels, establishing the tournament as a talent discovery platform.
                    </p>
                </div>
                </div>
                
                {/* 2025 */}
                <div className="relative">
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-yellow-500 text-[#1a1145] font-bold text-xl py-2 px-6 rounded-full z-10">
                    2025
                    </div>
                </div>
                <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400">The Elite League</h3>
                    <p className="text-gray-200">
                    Today, Bengal Elite League stands as the premier cricket tournament in the region with 16 teams, professional organization, substantial prize money, and live coverage. The tournament has become a launchpad for cricket careers and a celebration of Bengal&apos;s cricket culture.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      
      {/* Meet the Team */}
      <section className="py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Meet the Team</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-200">
              The passionate individuals behind Bengal Elite League
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <Card className="bg-[#2a1a55] border-yellow-500/20 overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/team1.png"
                  alt="Manoj Kumar Tiwari"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold mb-1 text-yellow-400">Manoj Kumar Tiwari</h3>
                <p className="text-sm text-yellow-300 mb-3">Founder & Tournament Director</p>
                <p className="text-sm text-gray-300">
                  Former cricket player with a passion for developing local talent and creating opportunities for young cricketers.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 2 */}
            <Card className="bg-[#2a1a55] border-yellow-500/20 overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/team2.png"
                  alt="Lakxmi Ratan Shukla"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold mb-1 text-yellow-400">Lakxmi Ratan Shukla</h3>
                <p className="text-sm text-yellow-300 mb-3">Operations Manager</p>
                <p className="text-sm text-gray-300">
                  With a background in sports management, Ananya ensures the smooth running of the tournament from start to finish.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 3 */}
            <Card className="bg-[#2a1a55] border-yellow-500/20 overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/team3.jpeg"
                  alt="Sanjay Ghosh"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold mb-1 text-yellow-400">Sanjay Ghosh</h3>
                <p className="text-sm text-yellow-300 mb-3">Technical Director</p>
                <p className="text-sm text-gray-300">
                  Former coach with extensive knowledge of cricket, Sanjay oversees the technical aspects of the tournament.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 4 */}
            <Card className="bg-[#2a1a55] border-yellow-500/20 overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/team4.jpeg"
                  alt="Priya Banerjee"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold mb-1 text-yellow-400">Priya Banerjee</h3>
                <p className="text-sm text-yellow-300 mb-3">Marketing & PR</p>
                <p className="text-sm text-gray-300">
                  Media professional who has helped build the Bengal Elite League brand and increase its visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section 
        className="py-16 bg-[#150237] bg-cover bg-center" 
        style={{ backgroundImage: 'url(cover_main.png)' }}
        >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">What People Say</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20 relative">
              <div className="absolute -top-5 left-6 text-yellow-400 text-6xl">&quot;</div>
              <p className="text-gray-200 mb-6 pt-4">
                Bengal Elite League gave me the platform to showcase my skills. The exposure and experience I gained were invaluable for my cricket career.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/player1.jpeg"
                    alt="Arjun Dutta"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400">Arjun Dutta</h4>
                  <p className="text-sm text-gray-300">Former BEL Player</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20 relative">
              <div className="absolute -top-5 left-6 text-yellow-400 text-6xl">&quot;</div>
              <p className="text-gray-200 mb-6 pt-4">
                The level of organization and professionalism at Bengal Elite League is impressive. It&apos;s a tournament that truly celebrates cricket and the spirit of competition.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/coach.jpeg"
                    alt="Debashish Roy"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400">Debashish Roy</h4>
                  <p className="text-sm text-gray-300">Team Coach</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20 relative">
              <div className="absolute -top-5 left-6 text-yellow-400 text-6xl">&quot;</div>
              <p className="text-gray-200 mb-6 pt-4">
                As a sponsor, we&apos;ve seen the tournament grow year after year. The passion and dedication of the organizers and players make it a perfect platform for brands to connect with cricket enthusiasts.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/sponsor.jpeg"
                    alt="Ritu Agarwal"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400">Ritu Agarwal</h4>
                  <p className="text-sm text-gray-300">Sponsor Representative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">Be Part of the Cricket Revolution</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Join us in celebrating cricket and supporting local talent. Register your team for the upcoming tournament or partner with us as a sponsor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-lg font-bold px-8 py-6">
                Register Your Team
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg font-bold px-8 py-6"
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
