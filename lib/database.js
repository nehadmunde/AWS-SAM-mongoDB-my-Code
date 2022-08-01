const mongoose = require("mongodb");
let cachedDb = null;
const mongodb_URL = "mongodb://localhost:27017";

export const connectToDatabase = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "aws-serverless",
    };
    await mongoose.connect(mongodb_URL, DB_OPTIONS);
    console.log("connction Sucessfull");
    // cachedDb = DB_OPTIONS;
    // return cachedDb;
  } catch (err) {
    console.log("error in mongo connection", err);
  }
};
