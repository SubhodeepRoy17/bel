"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function GameChangerSection() {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setShowPopup(true)
    // In a real implementation, you would also handle the form submission to your backend here
    
    // Auto-hide the popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false)
      setEmail("") // Clear the form
    }, 5000)
  }

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
              href="./registration"
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
      
      {/* Subscribe Section */}
      <div className="mt-16 container mx-auto px-4">
        <div className="bg-[#2a1d5a] rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
          <h3 
            className="text-2xl md:text-3xl font-bold mb-4 text-center text-yellow-400"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            SUBSCRIBE FOR UPDATES
          </h3>
          <p className="text-gray-200 text-center mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            Stay updated with the latest news, match schedules, and exclusive offers from Bengal Elite League.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-[#1a1145] text-gray-200 border border-gray-700"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] font-bold whitespace-nowrap px-6"
            >
              Subscribe Now
            </Button>
          </form>
          <p className="text-gray-400 text-sm text-center mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            By subscribing, you agree to receive emails from Bengal Elite League. You can unsubscribe at any time.
          </p>
        </div>
      </div>
      
      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowPopup(false)}></div>
          <div className="bg-[#2a1d5a] rounded-lg shadow-2xl p-6 max-w-md w-full relative z-10 border-2 border-yellow-500">
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="bg-green-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold mb-2 text-yellow-400"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Successfully Subscribed!
              </h3>
              <p className="text-gray-200" style={{ fontFamily: "Poppins, sans-serif" }}>
                Thank you for subscribing to the Bengal Elite League newsletter. You&apos;ll now receive all the latest updates!
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}