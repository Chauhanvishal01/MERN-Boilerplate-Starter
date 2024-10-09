import mongoose from "mongoose";
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`Connected to MONGODB  DATABASE`);
  } catch (error) {
    console.log(`Some error occured while connecting to database : ${err}`);
    process.exit(1);
  }
};

export default dbConnection;
