import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#150237] text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-50">
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
              Frequently Asked Questions
            </h1>
            <div className="h-1 w-32 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl mb-8 text-gray-200">
              Find answers to common questions about Bengal Elite League
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  How can I register my team for the tournament?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  Team registration is open for the 2025 tournament. You can register your team by filling out the registration form on our website or contacting our team directly. The registration fee is ₹75,000 per team, and slots are limited, so we recommend registering early.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  What is the format of the tournament?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  Bengal Elite League follows a 10-over format with tennis ball cricket. The tournament includes a group stage followed by knockout rounds. Each team can have a maximum of 15 players, with 11 playing in each match.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  Are there any player eligibility criteria?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  Players must be at least 16 years old to participate. Each team can include a maximum of 2 professional players who have played at the state level or above. All players must be residents of Bengal or neighboring states.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  How can I become a sponsor for Bengal Elite League?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  We offer various sponsorship packages for businesses looking to partner with Bengal Elite League. These range from title sponsorship to smaller packages like team sponsorship or advertising boards. Please contact our marketing team at sponsors@bengaleliteleague.com for more information.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  Will the matches be broadcast live?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  Yes, all matches will be broadcast live on our official YouTube channel and selected local TV channels. We also provide live scoring updates on our website and social media platforms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  What are the prizes for the tournament?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  The champion team will receive a trophy and prize money of ₹5,00,000. The runner-up will receive ₹2,50,000. There are also individual awards for the Player of the Tournament, Best Batsman, Best Bowler, and other categories with cash prizes and trophies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  How can I purchase tickets for the matches?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  Tickets for all matches will be available online through our website and at the stadium box office. Season passes are also available for fans who want to attend all matches. Group discounts are available for bookings of 10 or more tickets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  What facilities are available at the stadium?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  D3 Sports Arena offers ample seating, food and beverage stalls, clean restrooms, and parking facilities. The stadium is also accessible for people with disabilities. Premium seating areas with additional amenities are available for an upgraded experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  Can I volunteer for the tournament?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  Yes, we welcome volunteers to help with various aspects of the tournament. Volunteers can assist with ticketing, crowd management, hospitality, and more. Please fill out the volunteer form on our website or contact our team directly if you&apos;re interested in volunteering.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 px-6">
                <AccordionTrigger className="text-yellow-400 font-bold py-4">
                  How are teams grouped for the tournament?
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">
                  Teams are divided into groups through a random draw conducted publicly before the tournament. Each group typically consists of 4-5 teams, with the top two teams from each group qualifying for the knockout stage. The drawing ceremony is live-streamed on our social media channels.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Still Have Questions?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              If you couldn&apos;t find the answer to your question, please feel free to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-lg font-bold px-8 py-6">
                  Contact Us
                </Button>
              </Link>
              <Link href="mailto:support@bengaleliteleague.com">
                <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg font-bold px-8 py-6">
                  Email Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#1a1145] to-[#150237]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">Ready to Join the Cricket Revolution?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Be part of Bengal&apos;s most prestigious cricket tournament and showcase your talent on a grand stage.
          </p>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-lg font-bold px-8 py-6">
              Register Your Team
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}