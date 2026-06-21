require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Give Express the exact folder path for Vercel's environment
app.use(express.static(path.join(__dirname, 'public')));

// Explicitly send the index.html file when someone visits the main URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/insights', async (req, res) => {
    const { transport, energy, diet } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
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

        res.json({ insights: text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to generate personalized insights.' });
    }
});

module.exports = app;
