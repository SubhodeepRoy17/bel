//app/api/teams/update/route.ts
import { getTeamsCollection } from '@/lib/db';
import { ObjectId } from 'mongodb';
import { WebSocket } from 'ws';

interface TeamUpdates {
    [key: string]: any;
}

interface TeamsUpdateMessage {
    type: 'teams_update';
    teams: any[];
}

// In your update route (route.ts)
export async function POST(req: Request): Promise<Response> {
    try {
        const { teamId, updates } = await req.json();
        const collection = await getTeamsCollection();
        
        const result = await collection.updateOne(
            { _id: new ObjectId(teamId) },
            { $set: updates }
        );

        if (result.modifiedCount === 0) {
            throw new Error('No documents were updated');
        }

        const updatedTeams = await collection.find({}).toArray();
        return new Response(JSON.stringify({ success: true, teams: updatedTeams }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        console.error('Update error:', error);
        return new Response(JSON.stringify({ 
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}