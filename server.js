<<<<<<< HEAD
// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for Security and Parsing
app.use(cors());
app.use(express.json());
// Serve the frontend static files securely
app.use(express.static('public'));

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// API Endpoint to handle frontend requests
app.post('/api/insights', async (req, res) => {
    // Extract data sent from app.js
    const { transport, energy, diet } = req.body;

    try {
        // We use gemini-1.5-flash for maximum speed and efficiency
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        // Constructing the prompt to enforce problem statement alignment
        const prompt = `
        Act as an expert sustainability consultant. 
        A user has provided the following monthly data for their carbon footprint calculation:
        - Miles driven per week: ${transport} miles
        - Monthly electricity bill: $${energy}
        - Primary diet type: ${diet}
        
        Analyze this data and provide 3 short, highly actionable, and personalized tips to help them reduce their carbon footprint.
        Format your response directly in clean HTML using <ul>, <li>, and <strong> tags only. Do not include markdown code block wrappers like \`\`\`html.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Send the AI-generated HTML back to the frontend
        res.json({ insights: text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to generate personalized insights.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Secure backend running at http://localhost:${port}`);
=======
// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for Security and Parsing
app.use(cors());
app.use(express.json());
// Serve the frontend static files securely
app.use(express.static('public'));

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// API Endpoint to handle frontend requests
app.post('/api/insights', async (req, res) => {
    // Extract data sent from app.js
    const { transport, energy, diet } = req.body;

    try {
        // We use gemini-1.5-flash for maximum speed and efficiency
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        // Constructing the prompt to enforce problem statement alignment
        const prompt = `
        Act as an expert sustainability consultant. 
        A user has provided the following monthly data for their carbon footprint calculation:
        - Miles driven per week: ${transport} miles
        - Monthly electricity bill: $${energy}
        - Primary diet type: ${diet}
        
        Analyze this data and provide 3 short, highly actionable, and personalized tips to help them reduce their carbon footprint.
        Format your response directly in clean HTML using <ul>, <li>, and <strong> tags only. Do not include markdown code block wrappers like \`\`\`html.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Send the AI-generated HTML back to the frontend
        res.json({ insights: text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to generate personalized insights.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Secure backend running at http://localhost:${port}`);
>>>>>>> dc779a0d8ddb38401755bfb334092b85a8e2d035
});