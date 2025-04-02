//app/admin/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ObjectId } from 'mongodb';
import Header from "@/components/header";
import Footer from "@/components/footer";

interface Team {
    _id: string | ObjectId;  // Add ObjectId type
    name: string;
    played: number;
    won: number;
    lost: number;
    points: number;
    nrr: string;
}

export default function AdminPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [updates, setUpdates] = useState({
    played: 0,
    won: 0,
    lost: 0,
    points: 0,
    nrr: '0.000'
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Check authentication
  useEffect(() => {
    const storedAuth = localStorage.getItem('cricket-admin-auth');
    if (storedAuth === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch teams data
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchTeams = async () => {
      try {
        const res = await fetch('/api/teams');
        const data = await res.json();
        setTeams(data);
      } catch (err) {
        console.error('Failed to fetch teams:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [isAuthenticated]);

  // Handle team selection
  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
    setUpdates({
      played: team.played,
      won: team.won,
      lost: team.lost,
      points: team.points,
      nrr: team.nrr
    });
  };

  // Handle update submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTeam) return;
  
    try {
      const res = await fetch('/api/teams/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamId: selectedTeam._id,
          updates
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update team');
      }
      alert('Team updated successfully!');
      // Refresh teams data
      const refreshRes = await fetch('/api/teams');
      const refreshedTeams = await refreshRes.json();
      setTeams(refreshedTeams);
    } catch (err) {
      console.error('Update error:', err);
      alert(`Error updating team: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  // Handle authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem('cricket-admin-auth', password);
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#150237] flex items-center justify-center">
        <div className="bg-purple-900/80 p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-purple-200 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-purple-800/50 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-900 font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#150237] flex items-center justify-center">
        <div className="text-white text-xl">Loading admin data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#150237] text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 py-40">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Tournament Admin Panel
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem('cricket-admin-auth');
              setIsAuthenticated(false);
            }}
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team Selection */}
          <div className="bg-purple-950/70 rounded-xl p-6 backdrop-blur-md border border-purple-500/30 shadow-xl">
            <h2 className="text-xl font-bold text-amber-400 mb-4">Select Team</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
              {teams.map(team => (
                <div
                  key={team._id.toString()}
                  onClick={() => handleTeamSelect(team)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${selectedTeam?._id === team._id ? 'bg-purple-800/80 border border-amber-500/50' : 'bg-purple-900/50 hover:bg-purple-800/50'}`}
                >
                  <h3 className="font-medium">{team.name}</h3>
                  <div className="text-sm text-purple-300 mt-1">
                    Played: {team.played} | Won: {team.won} | Lost: {team.lost} | Points: {team.points} | NRR: {team.nrr}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Update Form */}
          <div className="bg-purple-950/70 rounded-xl p-6 backdrop-blur-md border border-purple-500/30 shadow-xl">
            <h2 className="text-xl font-bold text-amber-400 mb-4">
              {selectedTeam ? `Update ${selectedTeam.name}` : 'Select a team to update'}
            </h2>
            
            {selectedTeam && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-purple-200 mb-2">Matches Played</label>
                    <input
                      type="number"
                      value={updates.played}
                      onChange={(e) => setUpdates({...updates, played: parseInt(e.target.value) || 0})}
                      className="w-full p-3 bg-purple-800/50 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      min="0"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 mb-2">Matches Won</label>
                    <input
                      type="number"
                      value={updates.won}
                      onChange={(e) => setUpdates({...updates, won: parseInt(e.target.value) || 0})}
                      className="w-full p-3 bg-purple-800/50 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      min="0"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 mb-2">Matches Lost</label>
                    <input
                      type="number"
                      value={updates.lost}
                      onChange={(e) => setUpdates({...updates, lost: parseInt(e.target.value) || 0})}
                      className="w-full p-3 bg-purple-800/50 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      min="0"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 mb-2">Points</label>
                    <input
                      type="number"
                      value={updates.points}
                      onChange={(e) => setUpdates({...updates, points: parseInt(e.target.value) || 0})}
                      className="w-full p-3 bg-purple-800/50 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      min="0"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-purple-200 mb-2">Net Run Rate (NRR)</label>
                    <input
                      type="text"
                      value={updates.nrr}
                      onChange={(e) => setUpdates({...updates, nrr: e.target.value})}
                      className="w-full p-3 bg-purple-800/50 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      pattern="^[+-]?\d+\.\d{2}$"
                      title="Format: +1.23 or -1.23"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-900 font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all mt-4"
                >
                  Update Team Stats
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}