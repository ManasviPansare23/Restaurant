import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        required : true,
        minLength: [3,"Last name must contain at least 3 characteers !" ],
        maxLength: [30, "First name cannot exceed 30 characters!"],

    },
    lastName: {
        type: String,
        required : true,
        minLength :[3,"Last name must contain at least 3 characteers !" ],
        maxLength: [30, "First name cannot exceed 30 characters!"],

    },
    email: {
        type : String,
        required : true,
        validator: [validator.isEmail,"Provide a valid email"],

    },
    phone : {
        type : String,
        required: true,
        minLength: [10, "phone number must contain only 10 digits"],
        maxLength: [10, "phone number must contain only 10 digits" ]
    },
    time : {
        type : String,
        required : true
    },
    Date: {
        type : String,
        required : true
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);