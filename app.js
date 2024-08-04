import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbconnections from "./database/dbconnections.js";
import { errorMiddleware } from "./error/error.js";
import reservationRoute from "./routes/reservationRoute.js"

import connectDB from './database/dbconnections.js';

connectDB();

// Your other app logic here


dotenv.config({path: "./config/config.env" })
const app= express();
const port = process.env.PORT;
app.use(
    cors ({
        origin:[process.env.FRONTEND_URL],
        methods:'*',
        credentials :true,
    })
); 

app.use(express.urlencoded({extended: true }));
app.use('./api/v1/reservation',reservationRoute)


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend app is running  ')
  });
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});

// app.post('/api/v1/reservation/send', (req, res) => {
//     console.log('Received request:', req.body);
//     res.json({ message: 'Reservation sent!' });
// });





dbconnections();

app.use(errorMiddleware);


export default app ;