const mongoose = require('mongoose');
const ReviewModel = require('./review-model.js');
const Schema = mongoose.Schema;


const parkSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide the name of the Park']
  },
  address: {
    type: String,
    required: [true, 'Please provide an address of the Park']
  },
  imageUrl: {
    type: String,
    required: [true, 'At least one image has to be provided']
  },
  reviews: [ ReviewModel.schema]
});

const ParkModel = mongoose.model('Park', parkSchema);

module.exports = ParkModel;
