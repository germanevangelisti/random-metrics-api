const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://germanevangelisti:EOnmbyHrsztZwNAO@cluster0.j41u7.mongodb.net/atrix_challenge_app?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('atrix_challenge_app');
    const collection = database.collection('metricSources');

    const query = { Name: 'cooper' };
    const source = await collection.findOne(query);

    console.log(source);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);