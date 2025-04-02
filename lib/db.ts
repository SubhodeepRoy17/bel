import { MongoClient } from 'mongodb';

declare global {
  namespace NodeJS {
      interface Global {
        _mongoClientPromise?: Promise<MongoClient>;
      }
  }

  // Extend the global object to include _mongoClientPromise
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Please add your Mongo URI to the environment variables.');
}
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
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