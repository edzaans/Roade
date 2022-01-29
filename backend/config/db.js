// Import MONGOOSE
const mongoose = require("mongoose");

// Create MONGO connection, pull config from .ENV
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Mongo connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
