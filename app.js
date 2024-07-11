import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbconnections} from "./database/dbconnections.js";
import { errorMiddleware } from "./error/error.js";
import reservationRoute from "./routes/reservationRoute.js"
const app= express();
const port = 3001;
dotenv.config({path: "./config/config.env" })
app.use(
    cors ({
        // origin:[process.env.FRONTEND_URL],
        origin:[process.env.FRONTEND_URL],
        methods :["POST"],
        credentials :true,
    })
); 

app.use(express.json());

app.post('/api/v1/reservation/send', (req, res) => {
    res.send('Reservation sent!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

app.post('/api/v1/reservation/send', (req, res) => {
    console.log('Received request:', req.body);
    res.json({ message: 'Reservation sent!' });
});



app.use(express.urlencoded({extended: true }));
app.use('./api/v1/reservation',reservationRoute)

dbconnections();

app.use(errorMiddleware);


export default app ;