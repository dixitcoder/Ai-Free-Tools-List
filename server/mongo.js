const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware
const port = 4000;
app.use(cors());

const host ="10.10.10.9" ;

async function main() {
    const filter = {};

    // Connect to MongoDB
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6');

    try {
        const db = client.db('admin');
        const collection = db.collection('aitool');

        // Query the collection
        const cursor = collection.find(filter);
        const result = await cursor.toArray();

        // Close the connection after getting data
        await client.close();

        return result;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return null;
    }
}

// Define a route to handle GET requests and send the MongoDB data as JSON
app.get('/', async (req, res) => {
    try {
        const result = await main();
        if (result) {
            res.json(result);
        } else {
            res.status(500).json({ message: 'Error fetching data from MongoDB' });
        }
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
app.listen(port, host, () => {
    console.log(`Server running on port ${host}:${port}`);

  });

