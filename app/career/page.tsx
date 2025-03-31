import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Event Coordinator",
      type: "Full-time",
      location: "Kolkata",
      description: "Manage tournament logistics, team communications, and venue coordination for Bengal Elite League events.",
      responsibilities: [
        "Coordinate with teams and officials",
        "Manage match schedules",
        "Oversee venue preparations",
        "Handle on-ground operations"
      ],
      requirements: [
        "2+ years event management experience",
        "Excellent organizational skills",
        "Sports background preferred",
        "Flexibility to work weekends during tournaments"
      ]
    },
    {
      title: "Marketing Executive",
      type: "Full-time",
      location: "Kolkata",
      description: "Develop and execute marketing strategies to promote Bengal Elite League and engage fans.",
      responsibilities: [
        "Manage social media channels",
        "Coordinate with sponsors",
        "Create promotional content",
        "Plan digital marketing campaigns"
      ],
      requirements: [
        "Degree in Marketing or related field",
        "1+ years digital marketing experience",
        "Creative content creation skills",
        "Knowledge of cricket/sports marketing"
      ]
    },
    {
      title: "Volunteer Coordinator",
      type: "Contract",
      location: "Kolkata",
      description: "Recruit, train and manage volunteers for tournament operations.",
      responsibilities: [
        "Recruit and onboard volunteers",
        "Create training programs",
        "Assign volunteer roles",
        "Manage volunteer schedules"
      ],
      requirements: [
        "Experience in volunteer management",
        "Excellent people skills",
        "Ability to work under pressure",
        "Passion for community engagement"
      ]
    }
  ];

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
              Careers
            </h1>
            <div className="h-1 w-32 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl mb-8 text-gray-200">
              Join our team and be part of Bengal&apos;s premier cricket tournament
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">Current Openings</h2>
              <p className="text-lg text-gray-200">
                We&apos;re looking for passionate individuals to help grow Bengal Elite League
              </p>
            </div>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-yellow-400">{job.title}</h3>
                    <div className="flex gap-4 mt-2 md:mt-0">
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">{job.type}</span>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">{job.location}</span>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-200">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-bold text-yellow-400 mb-2">Responsibilities</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-200">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-400 mb-2">Requirements</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-200">
                        {job.requirements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link href={`/contact?subject=Application for ${job.title}`}>
                      <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 w-full md:w-auto">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Not Seeing Your Dream Role?</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
                We&apos;re always interested in hearing from talented individuals. Send us your resume and tell us how you can contribute to Bengal Elite League.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1a1145] text-lg font-bold px-8 py-6">
                    Contact Us
                  </Button>
                </Link>
                <Link href="mailto:careers@bengaleliteleague.com">
                  <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg font-bold px-8 py-6">
                    Email Your Resume
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-[#1a1145] to-[#150237]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-yellow-400">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Passionate Team</h3>
                <p className="text-gray-200">
                  Work with cricket enthusiasts who are dedicated to growing the sport in Bengal
                </p>
              </div>
              <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Growth Opportunities</h3>
                <p className="text-gray-200">
                  Be part of a rapidly growing tournament with opportunities for professional development
                </p>
              </div>
              <div className="bg-[#2a1a55] rounded-lg border border-yellow-500/20 p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Tournament Access</h3>
                <p className="text-gray-200">
                  Enjoy behind-the-scenes access to matches and events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}