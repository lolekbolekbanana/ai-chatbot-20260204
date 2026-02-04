#!/usr/bin/env node

/**
 * ai-chatbot
 * AI-powered chatbot
 * Built by Ross AI
 */

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: "ai-chatbot running",
        time: new Date().toISOString()
    }));
});

server.listen(PORT, () => {
    console.log("ai-chatbot on port " + PORT);
});

module.exports = { server };
