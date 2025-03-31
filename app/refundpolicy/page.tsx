import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RefundPolicyPage() {
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
              Refund Policy
            </h1>
            <div className="h-1 w-32 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl mb-8 text-gray-200">
              Our policy regarding refunds for Bengal Elite League
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-200">
            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Team Registration Fees</h2>
              <p className="mb-4">
                Team registration fees are non-refundable except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The tournament is canceled by Bengal Elite League organizers</li>
                <li>Your team&apos;s registration is rejected by the organizers</li>
              </ul>
              <p className="mt-4">
                In these cases, a full refund will be processed within 15 business days.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. Ticket Refunds</h2>
              <p className="mb-4">
                Match tickets can be refunded under these conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>If the match is canceled and not rescheduled (100% refund)</li>
                <li>If the match is abandoned before completion (50% refund)</li>
                <li>If requested at least 48 hours before the match (90% refund, 10% processing fee)</li>
              </ul>
              <p className="mt-4">
                Refund requests must be submitted through our website or at the ticket counter.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Merchandise Returns</h2>
              <p className="mb-4">
                Bengal Elite League merchandise can be returned within 7 days of purchase if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The item is unused and in original condition</li>
                <li>You provide proof of purchase</li>
                <li>The item has manufacturing defects</li>
              </ul>
              <p className="mt-4">
                Customized or personalized items cannot be returned unless defective.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Processing Refunds</h2>
              <p className="mb-4">
                Approved refunds will be processed to the original payment method within 15 business days. For bank transfers, please ensure you provide correct account details.
              </p>
              <p>
                Processing times may vary depending on your bank or payment provider.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Special Circumstances</h2>
              <p>
                In exceptional cases (medical emergencies, natural disasters, etc.), we may consider refund requests at our discretion. Supporting documentation will be required.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg mb-4">
                For any refund inquiries, please contact us within 30 days of purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-lg font-bold px-8 py-6">
                    Contact Us
                  </Button>
                </Link>
                <Link href="mailto:refunds@bengaleliteleague.com">
                  <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg font-bold px-8 py-6">
                    Email Refund Requests
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}