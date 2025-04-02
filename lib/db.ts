import { MongoClient } from 'mongodb';

declare global {
  interface GlobalThis {
    _mongoClientPromise?: Promise<MongoClient>;
  }
}

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Please add your Mongo URI to the environment variables.');
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  const globalWithMongo = globalThis as typeof globalThis & { _mongoClientPromise?: Promise<MongoClient> };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db('cricket-tournament');
}

export async function getTeamsCollection() {
  const db = await getDb();
  return db.collection('teams');
}

export { clientPromise };
