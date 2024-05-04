const mongoose = require('mongoose');
const slugify = require('slugify');
// const User = require('./userModel');
// const validator = require('validator');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
    // validate: [validator.isAlpha, 'Tour name must only contain characters']
  },
  slug: String,
  city: {
    type: String,
    required: [true, 'A tour must have a name'],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  currentSize: {
    type: Number,
    default: 0,
    select: false,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: {
    type: Number,
    validate: {
      validator: function (val) {
        // this only points to current doc on NEW document creation
        return val < this.price;
      },
      message: 'Discount price ({VALUE}) should be below regular price',
    },
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: {
    type: Date,
    required: [true, 'A tour must have a start Date '],
  },
  facilities: [
    {
      facility: {
        type: mongoose.Schema.ObjectId,
        ref: 'Facility',
        required: [true, 'A tour must have a facility'],
      },
      description: {
        type: String,
        required: [true, 'A tour must have a description for facility'],
      },
    },
  ],
  available: {
    type: Boolean,
    default: true,
  },
  startLocation: {
    type: String,
    required: [true, 'A tour must have a start location '],
  },
});

tourSchema.index({ slug: 1 });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
