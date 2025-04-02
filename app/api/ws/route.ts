import { NextApiRequest, NextApiResponse } from 'next';
import { Server as HttpServer } from 'http';
import { WebSocket, WebSocketServer } from 'ws';

interface ExtendedNextApiResponse extends NextApiResponse {
    socket: {
        server: HttpServer & {
            ws?: WebSocketServer;
        };
    } & import('net').Socket;
}

export default function handler(req: NextApiRequest, res: ExtendedNextApiResponse): void {
    if (!res.socket.server.ws) {
        console.log('Setting up WebSocket server');
        const wss = new WebSocketServer({ noServer: true });
        res.socket.server.ws = wss;

        wss.on('connection', (ws: WebSocket) => {
            console.log('New WebSocket connection');
            ws.on('close', () => console.log('Client disconnected'));
        });
    }

    res.end();
}

export const config = {
  api: {
    bodyParser: false,
  },
};