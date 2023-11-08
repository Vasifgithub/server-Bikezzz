const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://Vasif:test@cluster0.m41kpfi.mongodb.net/",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB connection Error");
  });
}

connectDB();

module.exports = mongoose;
