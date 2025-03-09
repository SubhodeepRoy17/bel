"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      {/* Fixed Video Icon */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40">
        <Button
          onClick={openModal}
          className="h-14 w-14 rounded-full bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] shadow-lg shadow-yellow-500/20 border-2 border-yellow-500 p-0 flex items-center justify-center group cursor-pointer"
          aria-label="Watch tournament video"
        >
          <Play className="h-7 w-7 group-hover:scale-110 transition-transform" />
          <span className="absolute -right-2 -top-2 flex h-5 w-5 animate-ping">
            <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-yellow-500"></span>
          </span>
        </Button>

        {/* Video Modal - Next to Play Button with Reduced Height */}
        {isOpen && (
          <div className="absolute left-16 top-0 -translate-y-1/2 z-50">
            <div className="bg-[#1a1145] rounded-lg shadow-2xl w-64 border border-yellow-500/30 overflow-hidden">
              <div className="flex justify-between items-center p-2 border-b border-yellow-500/30">
                <h3 className="text-sm font-bold text-yellow-400">Bengal Elite League</h3>
                <Button
                  onClick={closeModal}
                  variant="ghost"
                  className="h-6 w-6 p-0 rounded-full hover:bg-yellow-500/20 text-yellow- cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="h-100 relative">
                {/* Replace this with actual video embed code when available */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#2a1a55] p-2">
                  <div className="text-center">
                    <div className="mx-auto w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mb-1">
                      <Play className="h-5 w-5 text-yellow-400" />
                    </div>
                    <p className="text-xs text-white mb-1">Tournament Promo</p>
                    <p className="text-xs text-gray-300 line-clamp-2">
                      Bengal Elite League 2025 promo coming soon!
                    </p>
                  </div>
                </div>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full" 
                  src="/intro.mp4" 
                  title="Bengal Elite League Promo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}