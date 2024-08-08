const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5500;
app.use(cors());

app.get('/weather', async (req, res) => {
    const {location} = req.query;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: 'Error fetching data'}); 
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});