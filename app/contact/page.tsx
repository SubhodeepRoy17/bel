import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Wrench } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#150237] text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover_main.png"
            alt="Cricket Stadium"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400" style={{ fontFamily: "Poppins, sans-serif" }}>
              Contact Us
            </h1>
            <div className="h-1 w-32 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl mb-8 text-gray-200">
              Get in touch with the Bengal Elite League team for inquiries, partnerships, or support.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500 p-3 rounded-full text-[#1a1145]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Phone</h3>
                    <p className="text-gray-200 mb-1">+91 9062 42 3883 / +91 6290 445 420</p>
                    <p className="text-gray-200">+91 90077 58484 / +91 93308 14980</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500 p-3 rounded-full text-[#1a1145]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Email</h3>
                    <p className="text-gray-200 mb-1">contact@bengaleliteleague.com</p>
                    <p className="text-gray-200">support@bengaleliteleague.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500 p-3 rounded-full text-[#1a1145]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Location</h3>
                    <p className="text-gray-200">
                      D3 SPORTS ARENA MAIN STADIUM<br />
                      Maulana Abul Kalam Azad Rd, Gulmohar Railway Quarters,<br />
                      Mali Panchghara, Howrah, West Bengal 711106
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500 p-3 rounded-full text-[#1a1145]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Office Hours</h3>
                    <p className="text-gray-200 mb-1">Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-200">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-200">Sunday: Closed</p>
                  </div>
                </div>
                
                {/* New Technical Support Section */}
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500 p-3 rounded-full text-[#1a1145]">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Technical Support</h3>
                    <p className="text-gray-200 mb-1">Hemant Singh</p>
                    <p className="text-gray-200">+91 74397 67511</p>
                    <p className="text-gray-200 text-sm mt-2">(Available 24/7 for website and technical issues)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/1YjSMuXe4z/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-[#1a1145] hover:bg-yellow-400 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/bengaleliteleague?igsh=YnVncHZlcWkxZnRo&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-[#1a1145] hover:bg-yellow-400 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-[#1a1145] hover:bg-yellow-400 transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                  <a href="https://youtube.com/@bengaleliteleague?si=MI7UvRI1cSE1akC8" target="_blank" rel="noreferrer"
                    className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-[#1a1145] hover:bg-yellow-400 transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-[#2a1a55] border-yellow-500/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-[#1a1145] border border-yellow-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-[#1a1145] border border-yellow-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-[#1a1145] border border-yellow-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-[#1a1145] border border-yellow-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        placeholder="Team Registration"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-[#1a1145] border border-yellow-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] font-bold w-full py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-[#150237]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Find Us</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-200">
              Visit our stadium to experience the thrill of Bengal Elite League
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden border-4 border-yellow-500 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d920.9414303953819!2d88.338918!3d22.587864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e02e7f8935%3A0xd2ce9bf65ac04770!2sD3%20SPORTS%20ARENA%20(GULMOHAR)!5e0!3m2!1sen!2sin!4v1743424118790!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* CTA Section with link to FAQ page */}
      <section className="py-16 bg-gradient-to-b from-[#1a1145] to-[#150237]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">Ready to Join the Cricket Revolution?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Whether you&apos;re looking to register your team, become a sponsor, or simply want more information, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5WWPIBqlvkfu9SBVIx5KNfPVt1vy2AGdigw0tOdXyBG9NGA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-lg font-bold px-8 py-6">
                Register Now
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg font-bold px-8 py-6">
                View FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}