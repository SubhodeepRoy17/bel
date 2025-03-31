import { Calendar, Trophy, Users } from "lucide-react"

export default function TournamentDetails() {
  return (
    <section id="details" className="py-20 bg-[#1a1145]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">TOURNAMENT DETAILS</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Calendar className="h-8 w-8 text-[#1a1145]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-yellow-400">DATES</h3>
            <p className="text-center">
              14<sup>TH</sup> to 18<sup>TH</sup> May 2025
            </p>
            <p className="text-center text-sm text-gray-300 mt-2">5 Days of Cricket Action</p>
          </div>

          <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="h-8 w-8 text-[#1a1145]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-yellow-400">FORMAT</h3>
            <p className="text-center">16 Teams | 10 Over | Tennis Ball</p>
            <p className="text-center text-sm text-gray-300 mt-2">Fast-paced exciting matches</p>
          </div>

          <div className="bg-[#2a1a55] p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Trophy className="h-8 w-8 text-[#1a1145]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-yellow-400">ENTRY FEE</h3>
            <p className="text-center">₹75,000 per team</p>
            <p className="text-center text-sm text-gray-300 mt-2">Limited slots available</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">ADDITIONAL EVENTS</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#2a1a55]/50 p-4 rounded-lg">
              <p className="font-semibold">Press Release</p>
            </div>
            <div className="bg-[#2a1a55]/50 p-4 rounded-lg">
              <p className="font-semibold">Jersey & Trophy Launch</p>
            </div>
            <div className="bg-[#2a1a55]/50 p-4 rounded-lg">
              <p className="font-semibold">After Party</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

