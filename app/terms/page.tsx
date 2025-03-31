import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsConditionsPage() {
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
              Terms & Conditions
            </h1>
            <div className="h-1 w-32 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl mb-8 text-gray-200">
              Please read these terms carefully before participating in Bengal Elite League
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-200">
            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Tournament Participation</h2>
              <p className="mb-4">
                By registering for Bengal Elite League, you agree to abide by all tournament rules and regulations. Teams must complete registration and pay fees by the specified deadlines to participate.
              </p>
              <p>
                Bengal Elite League reserves the right to reject any registration without providing a reason.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. Player Conduct</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All players must maintain sportsmanlike conduct at all times</li>
                <li>Abusive language, violence, or cheating will result in immediate disqualification</li>
                <li>Players are responsible for their own safety and equipment</li>
                <li>Consumption of alcohol or drugs during matches is strictly prohibited</li>
              </ul>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Registration Fees</h2>
              <p className="mb-4">
                Registration fees are non-refundable except in cases where the tournament is canceled by the organizers. Teams withdrawing after registration will not receive refunds.
              </p>
              <p>
                Bengal Elite League is not responsible for any additional costs incurred by teams (travel, accommodation, etc.).
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Media Rights</h2>
              <p>
                By participating, you grant Bengal Elite League the right to use your name, likeness, and performance in any media for promotional purposes without additional compensation.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Liability</h2>
              <p className="mb-4">
                Participants acknowledge that cricket involves inherent risks. Bengal Elite League, its organizers, and venue partners are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any injuries sustained during the tournament</li>
                <li>Loss or damage to personal property</li>
                <li>Any consequential losses</li>
              </ul>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Changes to Tournament</h2>
              <p>
                Bengal Elite League reserves the right to modify tournament format, schedule, or rules as necessary. We will provide reasonable notice of any significant changes.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">7. Dispute Resolution</h2>
              <p>
                All disputes will be resolved by the tournament committee whose decision will be final. Legal jurisdiction for any disputes will be in Kolkata, West Bengal.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg mb-4">
                These terms were last updated on March 31, 2025.
              </p>
              <Link href="/contact">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-lg font-bold px-8 py-6">
                  Contact Us for Clarifications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}