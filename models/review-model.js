const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {type:String},
  starts: {
    type: Number,
    required: [true, 'Some stars-rating is required to submit the review'],
    min:1,
    max: [5, 'Stars can only be a maximum of 5']
  },
  author: {
    type: String,
    required: [true, 'The author of the review is required'],
    match: /.+@.+\..+/
  },
});

const ReviewModel = mongoose.model('Review', reviewSchema);

module.exports = ReviewModel;
