const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({

  name: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
});


module.exports = mongoose.model("Plant", plantSchema);
