const mongoose = require("mongoose");
const colors = require("colors");

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(
      `Connected to MongoDb Database ${conn.connection.host} `.bgGreen.black
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error} `.bgRed.white);
  }
};

module.exports = connectDatabase;
