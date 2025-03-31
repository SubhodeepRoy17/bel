"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-yellow-400" : "hover:text-yellow-400 transition-colors"
  }

  return (
    <header className="relative z-50 bg-[#1a1145]/90 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image src="/logo.png" alt="Bengal Elite League Logo" width={70} height={70} className="object-contain" />
          </Link>
          <Link href="/">
            <span className="font-bold text-2xl text-yellow-400" style={{ fontFamily: "Poppins, sans-serif" }}>
              Bengal Elite League
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6" style={{ fontFamily: "Poppins, sans-serif" }}>
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about")}>
            About
          </Link>
          <Link href="details" className="hover:text-yellow-400 transition-colors">
            Details
          </Link>
          <Link href="#prizes" className="hover:text-yellow-400 transition-colors">
            Prizes
          </Link>
          <Link href="/contact" className={isActive("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Register Button */}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] font-bold cursor-pointer"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Register Now
          </Button>
        </Link>
      </div>
    </header>
  )
}

