"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CountdownTimer from "@/components/countdown-timer"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style jsx>{`
        .clip-v-shape {
          clip-path: polygon(50% 100%, 0 0, 100% 0);
        }
      `}</style>

      <div className="absolute inset-0 z-0">
        <Image
          src="/cover_main.png"
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

        <div className="relative space-y-10">
          {/* First paragraph with highlight */}
          <div className="relative mb-12 space-x-10">
            <h1
              className="text-6xl md:text-6xl lg:text-6xl font-medium mb-6 text-yellow-400 tracking-normal drop-shadow-[2px_2px_4px_rgba(220,38,38,0.5)] relative z-10 py-2 space-between-x-10"
              style={{ fontFamily: "Boulevard Saint Denis" }}
            >
              BIGGER
            </h1>
            <h1
              className="text-6xl md:text-6xl lg:text-6xl font-medium mb-6 text-yellow-400 tracking-normal drop-shadow-[2px_2px_4px_rgba(220,38,38,0.5)] relative z-10 py-2 space-between-x-10"
              style={{ fontFamily: "Boulevard Saint Denis" }}
            >
              BETTER
            </h1>
            <h1
              className="text-6xl md:text-6xl lg:text-6xl font-medium mb-6 text-yellow-400 tracking-normal drop-shadow-[2px_2px_4px_rgba(220,38,38,0.5)] relative z-10 py-2 space-between-x-10"
              style={{ fontFamily: "Boulevard Saint Denis" }}
            >
                 GRANDER!
            </h1>
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
          <Link href="about">
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg font-bold px-8 py-6 cursor-pointer"
            >
              Learn More
            </Button>
          </Link>
        </div>

        <div className="mt-16 mb-8">
          <CountdownTimer targetDate="2025-05-14T00:00:00" />
        </div>
      </div>
    </section>
  )
}

