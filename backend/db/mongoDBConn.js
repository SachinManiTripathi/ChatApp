import mongoose from 'mongoose';

const mongoDBConn = async () => {
    try{
        await mongoose.connect(process.env.CONN_STRING);
        console.log("Connected to Database");
    }catch (error){
        console.log("Error connecting with Database:", error.message)
    }
}

export default mongoDBConn;