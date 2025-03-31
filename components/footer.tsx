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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About Section */}
          <div className="flex flex-col space-y-6">
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
              Experience the thrill of cricket with Bengal Elite League. Compete, win, and make history in West Bengal's premier cricket tournament!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1YjSMuXe4z/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1145] p-2 rounded-full transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1145] p-2 rounded-full transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/bengaleliteleague?igsh=YnVncHZlcWkxZnRo&utm_source=qr" 
                target="_blank" 
                rel="noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1145] p-2 rounded-full transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1145] p-2 rounded-full transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
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

          {/* Recent Updates */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl font-bold text-white relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-400 before:rounded">
              Recent Updates
            </h4>
            <div className="space-y-4">
              {[
                { date: "Mar 25, 2025", title: "Season 2 Registration Opens" },
                { date: "Mar 15, 2025", title: "New Stadium Announced" },
                { date: "Mar 10, 2025", title: "Player Draft Results" }
              ].map((update, index) => (
                <div key={index} className="group cursor-pointer">
                  <p className="text-yellow-400 text-sm font-medium">{update.date}</p>
                  <h5 className="text-white group-hover:text-yellow-400 transition-colors">{update.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col space-y-6">
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
                <Mail className="text-yellow-400 flex-shrink-0 " size={18} />
                <p className="text-sm">info@bengaleliteleague.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-yellow-400 flex-shrink-0 " size={18} />
                <p className="text-sm">contact@bengaleliteleague.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-yellow-400 flex-shrink-0 " size={18} />
                <p className="text-sm">hello@bengaleliteleague.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors Section with Glowing Effect */}
        <div className="mt-16 pt-8 border-t border-yellow-500/20">
          <h4 className="text-xl font-bold text-center text-white mb-8 relative inline-block">
            <span className="relative z-10">Our Sponsors & Partners</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400"></span>
          </h4>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num} 
                className="bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10"
              >
                <Image src={`/sponsor${num}.png`} alt={`Sponsor ${num}`} width={100} height={50} className="object-contain" />
              </div>
            ))}
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