const mongoose = require("mongoose");

const connect = () => {
  return mongoose
    .connect(process.env.DB_CONNECTION)
    .then((res) => console.log("DB connected ..."))
    .catch((err) => console.log("Error connecting to DB", err));
};
 

module.exports = connect;