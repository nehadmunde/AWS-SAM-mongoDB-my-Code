const { connectToDatabase } = require("../lib/database");

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const db = await connectToDatabase();
    const collection = await db.collection("Users");
    const Users = await collection.find({}).toArray();
    res.status(200).json({ Users });
  }
};
