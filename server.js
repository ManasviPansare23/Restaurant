const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Define the API route
app.post('/api/v1/reservation/send', (req, res) => {
  // Log the request body to verify data
    res.json ({message:'Reservation sent!'});
});

// Catch-all for undefined routes (optional)
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
