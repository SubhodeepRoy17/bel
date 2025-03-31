import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <div className="h-1 w-32 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl mb-8 text-gray-200">
              Your privacy is important to us at Bengal Elite League
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-200">
            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect personal information when you register for our tournament, purchase tickets, or interact with our website. This may include your name, email address, phone number, payment details, and team information.
              </p>
              <p>
                We also automatically collect certain technical data when you visit our website, such as your IP address, browser type, and pages visited.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process registrations and ticket purchases</li>
                <li>To communicate tournament updates and important information</li>
                <li>To improve our services and website experience</li>
                <li>To prevent fraud and ensure security</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Service providers who assist with tournament operations</li>
                <li>Payment processors for transaction completion</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p>
                We require all third parties to respect your privacy and handle your data in accordance with the law.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction. However, no internet transmission is completely secure, so we cannot guarantee absolute security.
              </p>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data in certain circumstances</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent where we rely on it for processing</li>
              </ul>
            </div>

            <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes through our website or email. The latest version will always be available on our website.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg mb-4">
                This policy was last updated on March 31, 2025.
              </p>
              <Link href="/contact">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-lg font-bold px-8 py-6">
                  Contact Us for Privacy Questions
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