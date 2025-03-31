"use client"
import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1a1145]">CONTACT US</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#1a1145]">GET IN TOUCH</h3>
            <div className="flex items-start gap-4 mb-6">
              <Phone className="text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#1a1145]">Call Us</p>
                <p className="text-gray-600">+91 9062 42 3883 / +91 6290 445 420</p>
                <p className="text-gray-600">+91 90077 58484 / +91 93308 14980</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#1a1145]">Location</p>
                <p className="text-gray-600">D3 SPORTS ARENA MAIN STADIUM</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-[#1a1145]">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/1YjSMuXe4z/?mibextid=wwXIfr"
                  className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-[#1a1145]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bengaleliteleague?igsh=YnVncHZlcWkxZnRo&utm_source=qr"
                  className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-[#1a1145]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-[#1a1145]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-[#1a1145]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#1a1145]">SEND US A MESSAGE</h3>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
                placeholder="Subject"
              />
              <textarea
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32 text-gray-800"
                placeholder="Your Message"
              ></textarea>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] font-bold w-full py-3 cursor-pointer">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}