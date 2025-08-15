require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const Groq = require('groq-sdk');
// const dotenv = require('dotenv');
// 

// dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY});

const PORT = 5000;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
// doesnt even reach api

app.post('/api/chatbot', async (req, res) => {
    const {input} = req.body;
    if (!input || !input.trim()) {
        return res.status(400).json({ error: 'Input message is required' });
    }
    try {
        // const chatCompletion = await groq.chat.completions.create({
        //     "messages": [
        //         {
        //             "role": "user",
        //             "content": "You are a helpful assistant. Answer the following question to the best of your ability: " + input
        //         }
        //     ],
        //     "model": "compound-beta-mini"
        // })
        // const response = chatCompletion.choices[0].message.content;
        // const groqRes = await axios.post(
        //     "https://api.groq.com/openai/v1/chat/completions",
        //     {
        //         model: 'compound-beta-mini',
        //         messages: [
        //             {
        //                 role: 'user',
        //                 content: `You are a helpful AI assistant. Answer the following question to the best of your ability: ${input}`,
        //             },
        //         ],
        //     },{
        //         headers: {
        //             Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        //             'Content-Type': 'application/json',
        //         },
        //     }
        // );
        // const response = groqRes.data.choices?.[0]?.message?.content;
        // if (!response) {
        //     return res.status(500).json({ error: 'No response from Groq' });
        // }
        // res.json({ response });
        const completion = await groq.chat.completions.create({
            model: "compound-beta-mini",
            messages: [{ role: "user", content: input}],
        });
        res.json({ reply: completion.choices[0].message.content});
    } catch (err) {
        console.error('Error in /api/chatbot:', err);
        res.status(500).json({ error: 'Internal server error'  + err.message});
    }
    });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});