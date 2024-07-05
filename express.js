const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb:http://localhost:3001/api/v1/reservation/send', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    date: String,
    phone: String,
    time: String
});

const User = mongoose.model('User', userSchema);

app.post('http://localhost:3001/api/v1/reservation/send', (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(() => res.status(200).send('User saved!'))
        .catch(err => res.status(400).send(err));
});

app.listen(3001, () => console.log('Server running on port 3001'));
