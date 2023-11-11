const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://r1tesh:1508@cluster0.rllyd7m.mongodb.net/car_rental?retryWrites=true&w=majority",
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
