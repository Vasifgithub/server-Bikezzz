const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://Vasif:2004@cluster0.m41kpfi.mongodb.net/car_rental",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successful");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
