import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#150d36] to-[#1a1145] py-16 text-gray-200">
      {/* Top Wave Separator */}
      <div className="w-full overflow-hidden -mt-16 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,74.7C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          
          {/* Logo & About Section */}
          <div className="flex flex-col space-y-6 text-left w-full">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Image src="/logo.png" alt="Bengal Elite League Logo" width={60} height={60} className="object-contain" />
              </div>
              <div>
                <h2 className="font-bold text-yellow-400 text-xl">Bengal Elite</h2>
                <h3 className="font-bold text-yellow-400 text-lg -mt-1">League</h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience the thrill of cricket with Bengal Elite League. Compete, win, and make history in West Bengal&apos;s premier cricket tournament!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1YjSMuXe4z/?mibextid=wwXIfr" target="_blank" rel="noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1145] p-2 rounded-full transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1145] p-2 rounded-full transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/bengaleliteleague?igsh=YnVncHZlcWkxZnRo&utm_source=qr" target="_blank" rel="noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1145] p-2 rounded-full transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/@bengaleliteleague?si=MI7UvRI1cSE1akC8"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1145] p-2 rounded-full transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6 text-left w-full">
            <h4 className="text-xl font-bold text-white relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-400 before:rounded">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/fixtures", label: "Match Fixtures" },
                { href: "/teams", label: "Teams & Players" },
                { href: "/news", label: "Latest News" },
                { href: "/contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index} className="group">
                  <Link href={link.href} className="flex items-center group-hover:text-yellow-400 transition-colors">
                    <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col space-y-6 text-left w-full">
            <h4 className="text-xl font-bold text-white relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-400 before:rounded">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
                <p className="text-sm leading-tight">
                  Maulana Abul Kalam Azad Rd, Gulmohar Railway Quarters, Mali Panchghara, Howrah, West Bengal 711106
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm leading-tight">+91 9062 42 3883 / +91 6290 445 420</p>
                  <p className="text-sm leading-tight">+91 90077 58484 / +91 93308 14980</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
                <p className="text-sm">support@bengaleliteleague.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-yellow-400 flex-shrink-0" size={18} />
                <p className="text-sm">contact@bengaleliteleague.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Hashtag */}
        <div className="mt-16 pt-6 border-t border-yellow-500/20 text-center">
          <p className="font-bold text-2xl text-yellow-400 mb-4">#ABKHELEGABENGAL</p>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bengal Elite League. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}