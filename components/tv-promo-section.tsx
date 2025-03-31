"use client"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BirdIcon as Cricket, Tv, Trophy } from "lucide-react"

export default function TvPromoSection() {
  const sectionRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true)
          if (videoRef.current) {
            videoRef.current.play().catch((error) => console.error("Autoplay failed:", error))
          }
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1145] to-[#2a1a55]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400 text-[#ff9600]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            GET READY FOR THE ACTION!
          </h2>
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
                  <CardTitle className="text-lg text-yellow-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                    16 Teams
                  </CardTitle>
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
                  <CardTitle className="text-lg text-yellow-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                    10 Over Format
                  </CardTitle>
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
                  <CardTitle className="text-lg text-yellow-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                    ₹6,00,000 Prize
                  </CardTitle>
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
                  <CardTitle className="text-lg text-yellow-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Live Coverage
                  </CardTitle>
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
  )
}

