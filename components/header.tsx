"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isScrolled,] = useState(false)

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);

  // Check if path is active
  interface IsActiveProps {
    path: string;
  }

  const isActive = (path: IsActiveProps["path"]): string => {
    return pathname === path ? "text-yellow-400 font-medium" : "hover:text-yellow-400 transition-colors";
  }

  // Toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  // Close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      <header className={`fixed w-full z-40 bg-[#1a1145]/90 backdrop-blur-sm border-b border-yellow-500/20 transition-all ${isScrolled ? "py-0" : "py-1"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between relative">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image src="/logo.png" alt="Bengal Elite League Logo" width={70} height={70} className="object-contain" />
            </Link>
            <Link href="/">
              <span className="font-bold text-xl md:text-2xl text-yellow-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                Bengal Elite League
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
            <Link href="/details" className={isActive("/details")}>
              Details
            </Link>
            <Link href="#prizes" className={isActive("#prizes")}>
              Prizes
            </Link>
            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Register Button - Desktop */}
          <div className="hidden md:block">
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none" 
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer - Completely Separate from Header */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-[#1a1145] z-50 md:hidden"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div className="flex flex-col h-full p-6">
            {/* Drawer Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Bengal Elite League Logo" width={50} height={50} className="object-contain" />
                <span className="font-bold text-xl text-yellow-400">
                  Bengal Elite League
                </span>
              </div>
              <button 
                className="text-white p-2 focus:outline-none" 
                onClick={toggleDrawer}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <nav className="flex flex-col gap-6 text-lg">
              <Link 
                href="/" 
                className={`${isActive("/")} border-l-4 ${pathname === "/" ? "border-yellow-400" : "border-transparent"} pl-4 py-2`}
                onClick={closeDrawer}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`${isActive("/about")} border-l-4 ${pathname === "/about" ? "border-yellow-400" : "border-transparent"} pl-4 py-2`}
                onClick={closeDrawer}
              >
                About
              </Link>
              <Link 
                href="/details" 
                className={`${isActive("/details")} border-l-4 ${pathname === "/details" ? "border-yellow-400" : "border-transparent"} pl-4 py-2`}
                onClick={closeDrawer}
              >
                Details
              </Link>
              <Link 
                href="#prizes" 
                className={`${isActive("#prizes")} border-l-4 ${pathname === "#prizes" ? "border-yellow-400" : "border-transparent"} pl-4 py-2`}
                onClick={closeDrawer}
              >
                Prizes
              </Link>
              <Link 
                href="/contact" 
                className={`${isActive("/contact")} border-l-4 ${pathname === "/contact" ? "border-yellow-400" : "border-transparent"} pl-4 py-2`}
                onClick={closeDrawer}
              >
                Contact
              </Link>
            </nav>

            {/* Register Button - Mobile */}
            <div className="mt-auto pt-6">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDrawer}
              >
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] font-bold py-3 cursor-pointer"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}