//app/api/teams/route.ts
import { getTeamsCollection } from '@/lib/db';

export async function GET() {
  try {
    const collection = await getTeamsCollection();
    const teams = await collection.find({}).sort({ points: -1, nrr: -1, won: -1 }).toArray();
    
    return new Response(JSON.stringify(teams), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error instanceof Error) ? error.message : 'An unknown error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}