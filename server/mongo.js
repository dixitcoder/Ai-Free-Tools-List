const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware
const port = 4000;
app.use(cors());

async function main() {
    const filter = {};

    // Connect to MongoDB
    const client = await MongoClient.connect('mongodb+srv://dixitcoder:BWjk41udXbqxA3mA@cluster0.zufs6xx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    try {
        const db = client.db('sample_mflix');
        const collection = db.collection('tools-ai');

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
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
