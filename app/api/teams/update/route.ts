// app/api/teams/update/route.ts
import { getTeamsCollection } from '@/lib/db';
import { ObjectId } from 'mongodb';

interface Team {
    _id: ObjectId;
    name: string;
    played: number;
    won: number;
    lost: number;
    points: number;
    nrr: string;
}

export async function POST(req: Request): Promise<Response> {
    try {
        const { teamId, updates }: { teamId: string; updates: Partial<Team> } = await req.json();
        const collection = await getTeamsCollection();

        const result = await collection.updateOne(
            { _id: new ObjectId(teamId) },
            { $set: updates }
        );

        if (result.modifiedCount === 0) {
            return new Response(JSON.stringify({ success: false, message: 'No documents were updated' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const updatedTeams = await collection.find({}).toArray();
        return new Response(JSON.stringify({ success: true, teams: updatedTeams }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: unknown) {
        console.error('Update error:', error);
        
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        const errorStack = process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined;

        return new Response(JSON.stringify({ 
            success: false,
            error: errorMessage,
            stack: errorStack
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
