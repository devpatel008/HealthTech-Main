const mongoose = require('mongoose')

const heartMetrics = new mongoose.Schema(
    {
        heartRate: {
            type: Number,
            required: [true, 'Please provide heartRate or cancel'],
        },
        spO2: {
            type: String,
            required: [true, 'Please provide spO2 or cancel'],
        },
        bloodStatus: {
            type: String,
            required: [true, 'Please provide bloodStatus or cancel'],
        },
        bloodCount: {
            type: String,
            required: [true, 'Please provide bloodCount or cancel'],
        },
        createdBy: {
            type:mongoose.Types.ObjectId,
            ref: "User",
            required: [true, 'Please Provide User'],
        }
    },
    { timestamps: true }
)

// const lungsMetrics = new mongoose.Schema({
//     lungCapacity: {
//         type: Number,
//         required: [true, 'Please provide capacity or cancel']
//     },
// })

module.exports = mongoose.model('Heart', heartMetrics)

// createdBy: {
//     type: mongoose.Types.ObjectId,
//     ref: 'User',
//     required: [true, 'Please provide user'],
// },