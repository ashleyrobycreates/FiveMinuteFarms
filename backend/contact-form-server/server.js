const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form Data:', { name, email, message });

    // Here you can add code to save the data to a database or send an email

    res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

