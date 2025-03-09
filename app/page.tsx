'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { Calendar, Trophy, Users, Phone, MapPin, BirdIcon as Cricket, Tv } from "lucide-react"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import VideoModal from "@/components/video-modal"

export default function Home() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true);
          if (videoRef.current) {
            videoRef.current.play().catch((error) => console.error("Autoplay failed:", error));
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  return (
  <div className="min-h-screen bg-[#150237] text-white overflow-hidden" style={{ fontFamily: "Poppins" }}>
  {/* Header */}
      <header className="relative z-50 bg-[#1a1145]/90 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Bengal Elite League Logo"
              width={70}
              height={70}
              className="object-contain"
            />
            <span className="font-bold text-2xl text-yellow-400">Bengal Elite League</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="#details" className="hover:text-yellow-400 transition-colors">
              Details
            </Link>
            <Link href="#prizes" className="hover:text-yellow-400 transition-colors">
              Prizes
            </Link>
            <Link href="#contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Register Button */}
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] font-bold cursor-pointer">
              Register Now
            </Button>
          </Link>
        </div>

      </header>

      <style jsx>{`
        .clip-v-shape {
          clip-path: polygon(50% 100%, 0 0, 100% 0);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/cover_main.jpeg"
          alt="Cricket Player"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="opacity-40"
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-center py-20">
        <div className="mb-10 flex justify-center">
          <Card className="w-full max-w-sm bg-[#2a1a55]/90 backdrop-blur-sm border-yellow-500/50 shadow-xl shadow-yellow-500/20">
            <CardHeader>
              <CardTitle className="text-yellow-400 text-3xl">Coming Soon...</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white text-lg">The biggest cricket event of 2025!</p>
              <div className="mt-4 flex justify-center">
                <span className="inline-block animate-ping h-4 w-4 rounded-full bg-yellow-400 opacity-75"></span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="relative">
          {/* First paragraph with highlight */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-yellow-300/20 rounded-lg backdrop-blur-sm px-10 w-[33%] ml-[500px]"></div>
            <p className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 text-yellow-400 font-['Edwardian_Script_ITC'] tracking-normal drop-shadow-[2px_2px_4px_rgba(220,38,38,0.5)] relative z-10 py-2">
              The Thrill of the Game
            </p>
          </div>
          
          {/* Second paragraph with highlight */}
          <div className="relative mb-12">
          <div className="absolute inset-0 bg-yellow-300/20 rounded-lg backdrop-blur-sm px-10 w-[40%] ml-[450px]"></div>
            <p className="text-5xl md:text-7xl lg:text-8xl font-medium mb-10 text-yellow-400 font-['Edwardian_Script_ITC'] tracking-normal drop-shadow-[2px_2px_4px_rgba(220,38,38,0.5)] relative z-10 py-2">
              The Joy of Winning
            </p>
          </div>
        </div>
        
        <div className="bg-[#1a1145]/80 backdrop-blur-sm p-6 rounded-lg inline-block mb-12 border border-yellow-500/30">
          <p className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-yellow-400">14</span>
            <sup className="text-yellow-400">TH</sup> TO
            <span className="text-yellow-400"> 18</span>
            <sup className="text-yellow-400">TH</sup> MAY 2025
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-lg font-bold px-8 py-6 cursor-pointer">
              Register Now
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg font-bold px-8 py-6 cursor-pointer"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 mb-8">
          <CountdownTimer targetDate="2025-05-14T00:00:00" />
        </div>
      </div>
    </section>

      {/* TV Promo Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1145] to-[#2a1a55]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400 text-[#ff9600]">GET READY FOR THE ACTION!</h2>
            <p className="text-lg mb-6 text-gray-200 max-w-2xl mx-auto">
              Bengal Elite League brings you the most exciting cricket tournament of 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-[#2a1a55] hover:shadow-lg transition-all border-yellow-500/30">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-[#1a1145]" />
                    </div>
                    <CardTitle className="text-lg text-yellow-400">16 Teams</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      The best cricket teams from across Bengal competing for glory
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-[#2a1a55] hover:shadow-lg transition-all border-yellow-500/30">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mb-2">
                      <Cricket className="h-5 w-5 text-[#1a1145]" />
                    </div>
                    <CardTitle className="text-lg text-yellow-400">10 Over Format</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Fast-paced cricket action with exciting matches
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-[#2a1a55] hover:shadow-lg transition-all border-yellow-500/30">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mb-2">
                      <Trophy className="h-5 w-5 text-[#1a1145]" />
                    </div>
                    <CardTitle className="text-lg text-yellow-400">₹6,00,000 Prize</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Massive prize pool with trophies and special awards
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-[#2a1a55] hover:shadow-lg transition-all border-yellow-500/30">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mb-2">
                      <Tv className="h-5 w-5 text-[#1a1145]" />
                    </div>
                    <CardTitle className="text-lg text-yellow-400">Live Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Full tournament coverage with highlights and analysis
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div ref={sectionRef} className="order-1 md:order-2 flex justify-center relative">
              <div className="relative max-w-md">
                {showVideo ? (
                  <>
                    <video
                      ref={videoRef}
                      src="/tv.mp4"
                      autoPlay
                      loop
                      playsInline
                      className="rounded-lg shadow-2xl w-[400px] h-[500px] object-cover"
                      muted={isMuted}
                    />
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 text-sm rounded-md"
                    >
                      {isMuted ? "🔇 Unmute" : "🔊 Mute"}
                    </button>
                  </>
                ) : (
                  <img
                    src="/tv.jpeg"
                    alt="Get Ready For The Action"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-2xl"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Details */}
      <section id="details" className="py-20 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">TOURNAMENT DETAILS</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Calendar className="h-8 w-8 text-[#1a1145]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-yellow-400">DATES</h3>
              <p className="text-center">
                14<sup>TH</sup> to 18<sup>TH</sup> May 2025
              </p>
              <p className="text-center text-sm text-gray-300 mt-2">5 Days of Cricket Action</p>
            </div>

            <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-[#1a1145]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-yellow-400">FORMAT</h3>
              <p className="text-center">16 Teams | 10 Over | Tennis Ball</p>
              <p className="text-center text-sm text-gray-300 mt-2">Fast-paced exciting matches</p>
            </div>

            <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Trophy className="h-8 w-8 text-[#1a1145]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-yellow-400">ENTRY FEE</h3>
              <p className="text-center">₹1,00,000 per team</p>
              <p className="text-center text-sm text-gray-300 mt-2">Limited slots available</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">ADDITIONAL EVENTS</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#2a1a55]/50 p-4 rounded-lg">
                <p className="font-semibold">Press Release</p>
              </div>
              <div className="bg-[#2a1a55]/50 p-4 rounded-lg">
                <p className="font-semibold">Jersey & Trophy Launch</p>
              </div>
              <div className="bg-[#2a1a55]/50 p-4 rounded-lg">
                <p className="font-semibold">After Party</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-[#1a1145] flex justify-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="border-4 border-yellow-500 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/prize.png" // Update the correct path
                alt="Tournament Poster"
                width={800} // Adjust as needed
                height={600} // Adjust as needed
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-gradient-to-b from-[#2a1a55] to-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">PRIZES & REWARDS</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#2a1a55] p-8 rounded-lg border border-yellow-500/30 text-center">
              <div className="inline-block mb-4">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="inline-block text-yellow-400 text-2xl transform rotate-[36deg] translate-x-[-5px]"
                    >
                      ★
                    </span>
                  ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">WINNERS</h3>
              <p className="text-4xl font-bold mb-4 text-white">₹6,00,000</p>
              <p className="text-gray-300">Trophy & Cash</p>
            </div>

            <div className="bg-[#2a1a55] p-8 rounded-lg border border-yellow-500/30 text-center">
              <div className="inline-block mb-4">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="inline-block text-yellow-400 text-2xl transform rotate-[45deg] translate-x-[-5px]"
                    >
                      ★
                    </span>
                  ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">RUNNERS-UP</h3>
              <p className="text-4xl font-bold mb-4 text-white">₹3,00,000</p>
              <p className="text-gray-300">Trophy & Cash</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#2a1a55]/70 p-4 rounded-lg text-center">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">MAN OF THE SERIES</h4>
              <p className="text-sm mb-2">Trophy &</p>
              <p className="font-bold">ELECTRIC SCOOTER</p>
            </div>

            <div className="bg-[#2a1a55]/70 p-4 rounded-lg text-center">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">MAN OF THE MATCH</h4>
              <p className="text-sm mb-2">Trophy &</p>
              <p className="font-bold">LED SMART TV</p>
              <p className="text-xs text-gray-400">(PER MATCH)</p>
            </div>

            <div className="bg-[#2a1a55]/70 p-4 rounded-lg text-center">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">BEST BOWLER</h4>
              <p className="text-sm mb-2">Trophy &</p>
              <p className="font-bold">SILVER BALL 300G</p>
            </div>

            <div className="bg-[#2a1a55]/70 p-4 rounded-lg text-center">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">BEST CATCH</h4>
              <p className="text-sm mb-2">Trophy &</p>
              <p className="font-bold">LAPTOP</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg">
              MEDALS & GIFTS FOR ALL FINAL MATCH PARTICIPANTS, INCLUDING WINNERS AND RUNNERS-UP.
            </p>
            <p className="text-lg mt-2">GIFTS FOR ALL CAPTAINS & TEAM MEMBERS THROUGHOUT THE ENTIRE LEAGUE.</p>
          </div>
        </div>
      </section>

      {/* Game Changer Section */}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400">BE THE GAME CHANGER</h2>
            <p className="text-lg mb-6 text-gray-200">
              Join the most prestigious cricket tournament in Bengal and showcase your talent on a grand stage.
            </p>
            <p className="text-lg mb-8 text-gray-200">
              The Bengal Elite League is more than just a tournament - it&apos;s a platform for cricketers to shine and make
              their mark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] font-bold cursor-pointer">
                  Register Your Team
                </Button>
              </Link>
              <Link 
                href={"/bronchure.pdf"} 
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 cursor-pointer">
                  Download Brochure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2a1a55]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">CONTACT US</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">GET IN TOUCH</h3>
              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-300">+91 9062 42 3883 / +91 6290 445 420 / +91 74397 67511</p>
                  <p className="text-gray-300">+91 90077 58484 / +91 93308 14980 / +91 74397 67511</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300">D3 SPORTS ARENA MAIN STADIUM</p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
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
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">SEND US A MESSAGE</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#1a1145] border border-yellow-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#1a1145] border border-yellow-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#1a1145] border border-yellow-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Subject"
                />
                <textarea
                  className="w-full px-4 py-3 bg-[#1a1145] border border-yellow-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
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

      {/* Footer */}
      <footer className="bg-[#1a1145] py-12 border-t border-yellow-500/20 text-gray-300">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Bengal Elite League Logo" width={50} height={50} />
              <span className="font-bold text-yellow-400 text-lg">Bengal Elite League</span>
            </div>
            <p className="text-sm text-gray-400">
              Experience the thrill of cricket with Bengal Elite League. Compete, win, and make history!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link href="/fixtures" className="hover:text-yellow-400">Match Fixtures</Link></li>
              <li><Link href="/teams" className="hover:text-yellow-400">Teams & Players</Link></li>
              <li><Link href="/news" className="hover:text-yellow-400">Latest News</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" className="hover:text-yellow-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" className="hover:text-yellow-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-yellow-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" className="hover:text-yellow-400">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4">Contact Us</h4>
            <p className="text-sm">📍 Maulana Abul Kalam Azad Rd, Gulmohar Railway Quarters, Mali Panchghara, Howrah, West Bengal 711106</p>
            <p className="text-sm">📞 +91 98765 43210/ 74397 67511</p>
            <p className="text-sm">📧 support@bengaleliteleague.com</p>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="border-t border-yellow-500/20 mt-8 pt-6 text-center">
          <h4 className="text-lg font-bold text-yellow-400 mb-4">Our Sponsors & Partners</h4>
          <div className="flex items-center justify-center space-x-6">
            <Image src="/sponsor1.png" alt="Sponsor 1" width={80} height={40} />
            <Image src="/sponsor2.png" alt="Sponsor 2" width={80} height={40} />
            <Image src="/sponsor3.png" alt="Sponsor 3" width={80} height={40} />
          </div>
        </div>

        {/* Copyright & Hashtag */}
        <div className="text-center text-sm text-gray-400 mt-6">
          <p>&copy; {new Date().getFullYear()} Bengal Elite League. All rights reserved.</p>
          <p className="mt-1 font-bold text-yellow-400">#ABKHELEGABENGAL</p>
        </div>
      </footer>
      <VideoModal />
    </div>
  )
}

