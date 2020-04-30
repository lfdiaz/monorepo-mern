const mongoose = require("mongoose");

//Example Schema
const exampleSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Example", exampleSchema);
