'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DetailsPage() {
  const [activeTab, setActiveTab] = useState('teams');

  // Mock data for teams
  const teams = [
    { id: 1, name: 'Kolkata Kings', played: 3, won: 3, lost: 0, points: 6, nrr: '+1.250' },
    { id: 2, name: 'Howrah Hunters', played: 3, won: 2, lost: 1, points: 4, nrr: '+0.850' },
    { id: 3, name: 'Siliguri Strikers', played: 3, won: 2, lost: 1, points: 4, nrr: '+0.520' },
    { id: 4, name: 'Darjeeling Daredevils', played: 3, won: 2, lost: 1, points: 4, nrr: '+0.320' },
    { id: 5, name: 'Malda Mavericks', played: 3, won: 1, lost: 2, points: 2, nrr: '-0.120' },
    { id: 6, name: 'Durgapur Dynamites', played: 3, won: 1, lost: 2, points: 2, nrr: '-0.350' },
    { id: 7, name: 'Asansol Avengers', played: 3, won: 1, lost: 2, points: 2, nrr: '-0.620' },
    { id: 8, name: 'Murshidabad Monarchs', played: 3, won: 0, lost: 3, points: 0, nrr: '-1.850' },
    { id: 9, name: 'Birbhum Blasters', played: 0, won: 0, lost: 0, points: 0, nrr: '0.000' },
    { id: 10, name: 'Cooch Behar Challengers', played: 0, won: 0, lost: 0, points: 0, nrr: '0.000' },
    { id: 11, name: 'Jalpaiguri Jaguars', played: 0, won: 0, lost: 0, points: 0, nrr: '0.000' },
    { id: 12, name: 'Purulia Panthers', played: 0, won: 0, lost: 0, points: 0, nrr: '0.000' },
    { id: 13, name: 'Bankura Bravehearts', played: 0, won: 0, lost: 0, points: 0, nrr: '0.000' },
    { id: 14, name: 'Burdwan Bulls', played: 0, won: 0, lost: 0, points: 0, nrr: '0.000' },
    { id: 15, name: 'Nadia Ninjas', played: 0, won: 0, lost: 0, points: 0, nrr: '0.000' },
    { id: 16, name: 'Hooghly Hurricanes', played: 0, won: 0, lost: 0, points: 0, nrr: '0.000' },
  ];
  
  // Tournament details based on the images
  const tournamentDetails = {
    name: 'Bengal Elite League (BEL) 2025',
    dates: '14th to 18th May 2025',
    venue: 'D3 Sports Arena, Main Stadium',
    format: '16-Team Knockout League',
    ballType: 'Tennis Ball',
    teamComposition: '11 Players + 1 Extra (Total 12 Players)',
    matchDuration: '10 Overs per Side, ~2 Hours per Match',
    totalMatches: 28,
    totalDays: 5,
    totalPlayers: 224,
    playersPerTeam: '11-14 Players per team',
    audience: '2000-3000 Daily',
    viewership: '80-100 Million',
    playerLevel: 'Players participating in national team and prime cricket'
  };

  return (
    <div className="min-h-screen relative">
      {/* Stadium Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/cover_main.png"
          alt="Cricket Stadium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-purple-950/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        <div className="container mx-auto p-6">
          {/* Tournament Overview Card */}
          <div className="bg-gradient-to-br from-purple-950/90 to-purple-900/80 text-white rounded-xl shadow-2xl p-6 mb-8 backdrop-blur-md border border-purple-500/30">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-6">EVENT OVERVIEW</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-baseline group transition-all">
                    <span className="mr-2 h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-xs text-purple-950">✓</span>
                    <span className="font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">Event Name:</span> 
                    <span className="ml-2 text-purple-100">{tournamentDetails.name}</span>
                  </li>
                  <li className="flex items-baseline group transition-all">
                    <span className="mr-2 h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-xs text-purple-950">✓</span>
                    <span className="font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">Dates:</span> 
                    <span className="ml-2 text-purple-100">{tournamentDetails.dates}</span>
                  </li>
                  <li className="flex items-baseline group transition-all">
                    <span className="mr-2 h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-xs text-purple-950">✓</span>
                    <span className="font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">Venue:</span> 
                    <span className="ml-2 text-purple-100">{tournamentDetails.venue}</span>
                  </li>
                  <li className="flex items-baseline group transition-all">
                    <span className="mr-2 h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-xs text-purple-950">✓</span>
                    <span className="font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">Format:</span> 
                    <span className="ml-2 text-purple-100">{tournamentDetails.format}</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-baseline group transition-all">
                    <span className="mr-2 h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-xs text-purple-950">✓</span>
                    <span className="font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">Ball Type:</span> 
                    <span className="ml-2 text-purple-100">{tournamentDetails.ballType}</span>
                  </li>
                  <li className="flex items-baseline group transition-all">
                    <span className="mr-2 h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-xs text-purple-950">✓</span>
                    <span className="font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">Team Composition:</span> 
                    <span className="ml-2 text-purple-100">{tournamentDetails.teamComposition}</span>
                  </li>
                  <li className="flex items-baseline group transition-all">
                    <span className="mr-2 h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-xs text-purple-950">✓</span>
                    <span className="font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">Match Duration:</span> 
                    <span className="ml-2 text-purple-100">{tournamentDetails.matchDuration}</span>
                  </li>
                  <li className="flex items-baseline group transition-all">
                    <span className="mr-2 h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-xs text-purple-950">✓</span>
                    <span className="font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">Total Matches:</span> 
                    <span className="ml-2 text-purple-100">{tournamentDetails.totalMatches}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-6">
            <div className="flex justify-center space-x-1 p-1 bg-purple-950/50 backdrop-blur-md rounded-xl border border-purple-500/30">
              <button
                className={`py-3 px-6 font-medium rounded-lg transition-all ${activeTab === 'teams' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-900 shadow-lg' 
                  : 'text-white hover:bg-purple-800/30'}`}
                onClick={() => setActiveTab('teams')}
              >
                Teams
              </button>
              <button
                className={`py-3 px-6 font-medium rounded-lg transition-all ${activeTab === 'standings' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-900 shadow-lg' 
                  : 'text-white hover:bg-purple-800/30'}`}
                onClick={() => setActiveTab('standings')}
              >
                Standings
              </button>
              <button
                className={`py-3 px-6 font-medium rounded-lg transition-all ${activeTab === 'stats' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-900 shadow-lg' 
                  : 'text-white hover:bg-purple-800/30'}`}
                onClick={() => setActiveTab('stats')}
              >
                Stats
              </button>
            </div>
          </div>
          
          {/* Teams Tab Content */}
          {activeTab === 'teams' && (
            <div className="bg-purple-950/70 rounded-xl p-6 backdrop-blur-md border border-purple-500/30 shadow-xl">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-6">Participating Teams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {teams.map(team => (
                  <div key={team.id} className="bg-gradient-to-br from-purple-800/90 to-purple-700/80 rounded-lg overflow-hidden hover:shadow-lg hover:from-purple-700/90 hover:to-purple-600/80 transition-all group">
                    <div className="p-4 relative">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/10 rounded-bl-full"></div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-amber-200 transition-colors">{team.name}</h3>
                      <div className="mt-2 text-sm text-purple-200 flex justify-between">
                        <span>Players: 11-14</span>
                        {team.played > 0 && (
                          <span className="font-medium text-amber-300">{team.won}W - {team.lost}L</span>
                        )}
                      </div>
                    </div>
                    {team.played > 0 && (
                      <div className="bg-purple-900/70 px-4 py-2 flex justify-between text-xs text-purple-200">
                        <span>Played: {team.played}</span>
                        <span>Points: <span className="font-bold text-amber-300">{team.points}</span></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Standings Tab Content */}
          {activeTab === 'standings' && (
            <div className="bg-purple-950/70 rounded-xl p-6 backdrop-blur-md border border-purple-500/30 shadow-xl">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-6">Tournament Standings</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-800/90 to-purple-700/80 text-amber-300">
                      <th className="py-4 px-6 text-left rounded-tl-lg">Position</th>
                      <th className="py-4 px-6 text-left">Team</th>
                      <th className="py-4 px-6 text-center">Played</th>
                      <th className="py-4 px-6 text-center">Won</th>
                      <th className="py-4 px-6 text-center">Lost</th>
                      <th className="py-4 px-6 text-center">Points</th>
                      <th className="py-4 px-6 text-center rounded-tr-lg">NRR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.sort((a, b) => b.points - a.points || parseFloat(b.nrr.replace('+', '')) - parseFloat(a.nrr.replace('+', ''))).map((team, index) => (
                      <tr key={team.id} className={`
                        ${index % 2 === 0 ? 'bg-purple-800/30' : 'bg-purple-900/30'} 
                        border-b border-purple-700/30 hover:bg-purple-700/50 transition-colors
                        ${index === 0 ? 'border-l-4 border-l-amber-500' : ''}
                        ${index === teams.length - 1 ? 'rounded-b-lg' : ''}
                      `}>
                        <td className="py-3 px-6">
                          <div className="flex items-center">
                            <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs mr-2 
                              ${index < 4 ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-purple-900' : 'bg-purple-700 text-purple-200'}`}>
                              {index + 1}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-6 font-medium">{team.name}</td>
                        <td className="py-3 px-6 text-center">{team.played}</td>
                        <td className="py-3 px-6 text-center text-green-400">{team.won}</td>
                        <td className="py-3 px-6 text-center text-red-400">{team.lost}</td>
                        <td className="py-3 px-6 text-center">
                          <span className="font-bold text-lg text-amber-300">{team.points}</span>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span className={`${team.nrr.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {team.nrr}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Stats Tab Content */}
          {activeTab === 'stats' && (
            <div className="bg-purple-950/70 rounded-xl p-6 backdrop-blur-md border border-purple-500/30 shadow-xl text-white">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-6">Tournament Statistics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-purple-800/80 to-purple-700/70 rounded-xl p-6 shadow-lg border border-purple-500/30 relative overflow-hidden group hover:from-purple-700/80 hover:to-purple-600/70 transition-all">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 rounded-full"></div>
                  <div className="absolute -right-2 -top-2 w-16 h-16 bg-amber-500/20 rounded-full"></div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">Event Scale</h3>
                  <ul className="space-y-3 relative z-10">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                      <span className="font-medium">Teams:</span> 
                      <span className="ml-2 text-purple-200">{tournamentDetails.format.split('-')[0]}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                      <span className="font-medium">Matches:</span> 
                      <span className="ml-2 text-purple-200">{tournamentDetails.totalMatches}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                      <span className="font-medium">Days:</span> 
                      <span className="ml-2 text-purple-200">{tournamentDetails.totalDays}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-800/80 to-purple-700/70 rounded-xl p-6 shadow-lg border border-purple-500/30 relative overflow-hidden group hover:from-purple-700/80 hover:to-purple-600/70 transition-all">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 rounded-full"></div>
                  <div className="absolute -right-2 -top-2 w-16 h-16 bg-amber-500/20 rounded-full"></div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">Audience</h3>
                  <ul className="space-y-3 relative z-10">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                      <span className="font-medium">Daily Attendance:</span> 
                      <span className="ml-2 text-purple-200">{tournamentDetails.audience}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                      <span className="font-medium">Total Viewership:</span> 
                      <span className="ml-2 text-purple-200">{tournamentDetails.viewership}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-800/80 to-purple-700/70 rounded-xl p-6 shadow-lg border border-purple-500/30 relative overflow-hidden group hover:from-purple-700/80 hover:to-purple-600/70 transition-all">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 rounded-full"></div>
                  <div className="absolute -right-2 -top-2 w-16 h-16 bg-amber-500/20 rounded-full"></div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">Players</h3>
                  <ul className="space-y-3 relative z-10">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                      <span className="font-medium">Total Players:</span> 
                      <span className="ml-2 text-purple-200">{tournamentDetails.totalPlayers}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                      <span className="font-medium">Per Team:</span> 
                      <span className="ml-2 text-purple-200">{tournamentDetails.playersPerTeam}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                      <span className="font-medium">Type:</span> 
                      <span className="ml-2 text-purple-200">National & Prime Cricket Players</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </div>
  );
}