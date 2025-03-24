import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connection.on("connected", () => {
        console.log("✅ MongoDB Connected Successfully");
        });
    
        await mongoose.connect(process.env.MONGODB_URI);
    
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1); // Exit the app if DB connection fails
    }

    /* mongoose.connection.on('connected', ()=>console.log("Database Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`); */
    /*  `mern` is a part of the MongoDB URI being
    used to connect to the database. In this case, it is likely indicating that the
    database being connected to is related to a MERN (MongoDB, Express, React, Node.js) stack application. */
};

export default connectDB;