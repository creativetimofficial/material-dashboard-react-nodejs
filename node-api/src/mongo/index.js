import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = () => {
 mongoose.connection.once("open", () => console.log("DB connection"));
 console.log(`Attempting to connect to: ${process.env.DB_LINK}`);

 console.log("***************************");
 console.log(process.env.DB_LINK.startsWith("mongodb+srv://"));
 console.log("***************************");

  return mongoose.connect(
    process.env.DB_LINK,
    { keepAlive: true}
  );

};
