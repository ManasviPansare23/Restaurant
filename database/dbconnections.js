import mongoose from "mongoose" ;
 export const dbconnections =() => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName :"RESTAURANT"
    })
    .then( () => {
         console.log("Connected to databse successfully!");
    })
    .catch(err=>{
        console.log("some error occured while connecting to database ${err}")
    })
}