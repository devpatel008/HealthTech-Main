// const { number } = require('joi')
const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
const Conditions = new mongoose.Schema({
  asthma: {
    type: Boolean,
    //  required:[true]
  },
  cardiacDisease: {
    type: Boolean,
    //  required:[true]
  },
  hypertension: {
    type: Boolean,
    //  required:[true]
  },
  epilepsy: {
    type: Boolean,
    //  required:[true]
  },
  cancer: {
    type: Boolean,
    //  required:[true]
  },
  diabetes: {
    type: Boolean,
    //  required:[true]
  },
  psychiatricDisorder: {
    type: Boolean,
    //  required:[true]
  },
  other: {
    type: Boolean,
    //  /required:[true]
  },
});

const Symptoms = new mongoose.Schema({
  chestPain: {
    type: Boolean,
    //  required:[true]
  },
  otherSymptoms: {
    type: Boolean,
    //  required:[true]
  },
  weightGain: {
    type: Boolean,
    //  required:[true]
  },
  weightLoss: {
    type: Boolean,
    //  required:[true]
  },
  musculoskeletal: {
    type: Boolean,
    //  required:[true]
  },
  gastrointestinal: {
    type: Boolean,
    //  required:[true]
  },
  psychiatric: {
    type: Boolean,
    //   required:[true]
  },
  neurological: {
    type: Boolean,
    //   required:[true]
  },
  genitourinary: {
    type: Boolean,
    //   required:[true]
  },
  lymphatic: {
    type: Boolean,
    //   required:[true]
  },
  hematological: {
    type: Boolean,
    //   required:[true]
  },
  cardiovascular: {
    type: Boolean,
    //   required:[true]
  },
  respriratory: {
    type: Boolean,
    //   required:[true]
  },
});
const HistorySchema = new mongoose.Schema({
  name: {
    type: String,
    //   required: [true, 'Please provide info']
  },
  gender: {
    type: Number,
    //   required: [true, "Please provide Info"],
  },
  age: {
    type: Number,
    //   required: [true, "Please Provide Info"]
  },
  contactNumber: {
    type: Number,
    //   required:[true, "Please provide Info"],
  },
  allergies: {
    type: String,
    //   required:[true, "Please provide Info"],
  },
  otherMedications: {
    type: String,
    //   required:[true, "Please provide Info"],
  },
  conditions: {
    type: Conditions,
    //   required:[true, "Please provide Info"],
  },
  symptoms: {
    type: Symptoms,
    //   required:[true, "Please provide Info"],
  },
  alcoholCosumption: {
    type: Boolean,
    //   required:[true, "Please provide Info"]
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

// UserSchema.pre('save', async function () {
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

// UserSchema.methods.createJWT = function () {
//     return jwt.sign(
//         { userId: this._id, name: this.name },
//         process.env.JWT_SECRET,
//         {
//             expiresIn: process.env.JWT_LIFETIME,
//         }
//     )
// }

// UserSchema.methods.comparePassword = async function (canditatePassword) {
//     const isMatch = await bcrypt.compare(canditatePassword, this.password)
//     return isMatch
// }

module.exports = mongoose.model("History", HistorySchema);
