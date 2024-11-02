const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes'); // Import your routes



const PORT = 5001;
const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Update this to match your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from frontend
app.use(express.json()); // Middleware to parse JSON requests

// MongoDB connection
// const mongoURI = 'mongodb://localhost:27017/Submitdetails'; // Your database name
// mongoose.connect(mongoURI)
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });

// Routes
app.use('/api', formRoutes); // Use routes from formRoutes.js

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


