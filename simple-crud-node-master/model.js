var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var carSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  engine: {
    type: String,
    required: true
  },
  miles: {
    type: String,
    required: true
  }
});

var personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  carsOwned: [{ type: Schema.Types.ObjectId, ref: 'car'}]
});

module.exports = {
  Car: mongoose.model("car",carSchema),
  Person: mongoose.model("person",personSchema)
};
