const mongoose = require('mongoose');
const User = require('./userModel');
const Tour = require('./tourModel');
const registrantSchema = new mongoose.Schema(
  {
    user: {
      required: [true, 'must enter user'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    tour: {
      required: [true, 'must enter tour'],
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
    },
  },
  {
    timestamps: true,
  }
);
registrantSchema.post('save', async function (doc) {
  if (doc) {
    ///////////////////update User//////////////////////////
    let thisuser = await User.findById(doc.user);
    if (++thisuser.count_tour % 5 == 0) {
      thisuser.haveDiscount = true;
    }
    await thisuser.save();
    ////////////////////update Tour//////////////////////////////
    let thisTour = await Tour.findById(doc.tour).select('+currentSize');
    if (++thisTour.currentSize == thisTour.maxGroupSize) {
      thisTour.available = false;
    }
    await thisTour.save();
  }
});
const Registrant = mongoose.model('Registrant', registrantSchema);
module.exports = Registrant;
