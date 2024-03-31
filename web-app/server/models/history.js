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
    cheifComplaint: {
        type: String,
        required: [true, "Please Provide Info"]
    },
    presentIlliness: {
        type: Array,
        required: [true, "Please Provide Info"]
    },
    bloodGroup: {
        type: String,
        required: [true, "Please Provide Info"]
    },
    nnMedications: {
        type: String,
        required: [true, "Please Provide Info"],
    },
    alcoholCounsumer: {
        type: String,
        required: [true, "Please Provide Info"],
    },
    tobaacoCounsumer: {
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
