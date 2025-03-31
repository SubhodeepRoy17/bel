export default function PrizesSection() {
    return (
      <section id="prizes" className="py-20 bg-gradient-to-b from-[#2a1a55] to-[#1a1145]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">PRIZES & REWARDS</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#2a1a55] p-8 rounded-lg border border-yellow-500/30 text-center">
              <div className="inline-block mb-4">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="inline-block text-yellow-400 text-2xl transform rotate-[36deg] translate-x-[-5px]"
                    >
                      ★
                    </span>
                  ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">WINNERS</h3>
              <p className="text-4xl font-bold mb-4 text-white">₹7,50,000</p>
              <p className="text-gray-300">Trophy & Cash</p>
            </div>
  
            <div className="bg-[#2a1a55] p-8 rounded-lg border border-yellow-500/30 text-center">
              <div className="inline-block mb-4">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="inline-block text-yellow-400 text-2xl transform rotate-[45deg] translate-x-[-5px]"
                    >
                      ★
                    </span>
                  ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">RUNNERS-UP</h3>
              <p className="text-4xl font-bold mb-4 text-white">₹3,00,000</p>
              <p className="text-gray-300">Trophy & Cash</p>
            </div>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#2a1a55]/70 p-4 rounded-lg text-center">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">MAN OF THE SERIES</h4>
              <p className="text-sm mb-2">Trophy &</p>
              <p className="font-bold">ELECTRIC SCOOTER</p>
            </div>
  
            <div className="bg-[#2a1a55]/70 p-4 rounded-lg text-center">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">MAN OF THE MATCH</h4>
              <p className="text-sm mb-2">Trophy &</p>
              <p className="font-bold">LED SMART TV</p>
              <p className="text-xs text-gray-400">(PER MATCH)</p>
            </div>
  
            <div className="bg-[#2a1a55]/70 p-4 rounded-lg text-center">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">BEST BOWLER</h4>
              <p className="text-sm mb-2">Trophy &</p>
              <p className="font-bold">SILVER BALL 300G</p>
            </div>
  
            <div className="bg-[#2a1a55]/70 p-4 rounded-lg text-center">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">BEST CATCH</h4>
              <p className="text-sm mb-2">Trophy &</p>
              <p className="font-bold">LAPTOP</p>
            </div>
          </div>
  
          <div className="mt-12 text-center">
            <p className="text-lg">MEDALS & GIFTS FOR ALL FINAL MATCH PARTICIPANTS, INCLUDING WINNERS AND RUNNERS-UP.</p>
            <p className="text-lg mt-2">GIFTS FOR ALL CAPTAINS & TEAM MEMBERS THROUGHOUT THE ENTIRE LEAGUE.</p>
          </div>
        </div>
      </section>
    )
  }
  
  