// Import MONGOOSE
/* const mongoose = require("mongoose");

// Create MONGO connection, pull config from .ENV
const connectDB2 = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(
      `Mongo connected to second instance of : ${conn.connection.host}`
    );
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB2; */

const mongoose = require("mongoose");

// Create a POST schema to be created
const testSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const test = mongoose.model("test", testSchema);
module.exports = test;
