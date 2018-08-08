import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
const app = express();

// Handle environment file
if (fs.exists('./.env')) {
    dotenv.config();
}


// Regex to match on GET requests from component URIs
const uriRegex = /spotify:[a-z]{1,10}:\w+/;


app.use(cors());

app.get('/song/:uri', (req, res) => {
    const uri = req.params.uri
    const match = uriRegex.exec(uri)
    // Validate input server-side
    if (match !== null) {
        // Show that we're returning JSON
        res.setHeader('Content-Type', 'application/json');
        res.send('{\"uri\": \"' + uri + '\"}');
    } else {
        res.status(400).send({message: 'Invalid or malformed URI provided.'})
    }
    
})

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(9091, () => {
    console.log("Listening on port 9091");
});