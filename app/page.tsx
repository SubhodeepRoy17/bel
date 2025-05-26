
import React from 'react';
/*import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TvPromoSection from "@/components/tv-promo-section"
import TournamentDetails from "@/components/tournament-details"
import ImageSection from "@/components/image-section"
import PrizesSection from "@/components/prizes-section"
import GameChangerSection from "@/components/game-changer-section"
import Footer from "@/components/footer"
import VideoModal from "@/components/video-modal"
*/
export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-[#150237] text-white overflow-hidden"
      style={{ fontFamily: "Poppins" }}
    >
      <img 
        src="/hacked-hack.gif" 
        alt="Full Screen GIF" 
        style={{ 
          width: '100vw', 
          height: '100vh', 
          objectFit: 'cover' 
        }}
      />
    </div>
  );
}
