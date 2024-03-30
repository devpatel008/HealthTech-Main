// const { number } = require('joi')
const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

const HistorySchema = new mongoose.Schema({

    dateOfBirth: {
        type: String,
        required: [true, 'Please provide info']
    },
    fullName: {
        type: String,
        required: [true, 'Please provide info']
    },
    age: {
        type: Number,
        required: [true, 'Please provide info']
    },

    weight: {
        type: Number,
        required: [true, "Please provide Info"],
    },

    height: {
        type: Number,
        required: [true, "Please Provide Info"]
    },
    CheifComplaint: {
        type: String,
        required: [true, "Please Provide Info"]
    },
    PresentIlliness: {
        type: Array,
        required: [true, "Please Provide Info"]
    },
    Blood_Group: {
        type: String,
        required: [true, "Please Provide Info"]
    },
    On_Medications: {
        type: String,
        required: [true, "Please Provide Info"],
    },
    Alcohol_Counsumer: {
        type: String,
        required: [true, "Please Provide Info"],
    },
    Tobaaco_Counsumer: {
        type: String,
        required: [true, "Please Provide Info"],
    }


})

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

module.exports = mongoose.model('History', HistorySchema)
