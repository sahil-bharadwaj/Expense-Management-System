require("dotenv").config({ path: `${__dirname}/.env` });
const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    
    if (!mongoUrl) {
      throw new Error("MONGO_URL is not defined in .env file");
    }

    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `✓ Database Connected: ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`✗ Database Connection Error: ${error.message}`.bgRed);
    process.exit(1);
  }
};

module.exports = connectDb;
