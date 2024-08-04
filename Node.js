const express = require('express');
const app = express();
const port = 3000;

app.post('/api/v1/reservation/send', (req, res) => {
    // Your logic here
    res.send('Reservation sent!');
});

app.listen(port, () => {
    console.log('Server running on port ${port}');
});
