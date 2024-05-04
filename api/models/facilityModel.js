const mongoose = require('mongoose');
const facilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A facility must have a name'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'A facility must have a name'],
  },
  image: {
    type: String,
    required: [true, 'A facility must have a cover image'],
  },
  location: {
    city: {
      type: String,
      required: [true, 'A location must have a city'],
    },
    region: {
      type: String,
      required: [true, 'A location must have a region'],
    },
    street: {
      type: String,
      required: [true, 'A location must have a street'],
    },
  },
});
const Facility = mongoose.model('Facility', facilitySchema);
module.exports = Facility;
