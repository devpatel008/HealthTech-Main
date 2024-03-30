const mongoose = require('mongoose')

const VitalData = new mongoose.Schema(
    {
        heartRate: {
            type: Number,
            // required: [true, 'Please provide heartRate or cancel'],
        },
        spO2: {
            type: String,
            // required: [true, 'Please provide spO2 or cancel'],
        },
        bloodCount: {
            type: String,
            // required: [true, 'Please provide bloodCount or cancel'],
        },
        bloodPressure: {
            type: Number,
            // required: [true, 'Please provide info']
        },
        temperature: {
            type: Number,
            // required: [true, 'Please provide info']
        },
        respiratoryRate: {
            type: Number,
            // required: [true, 'Please provide info']
        },
        sugarLevel: {
            type: Number,
            // required: [true, 'Please provide info']
        },
        doctor: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
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

module.exports = mongoose.model('Vitals', VitalData)

// createdBy: {
//     type: mongoose.Types.ObjectId,
//     ref: 'User',
//     required: [true, 'Please provide user'],
// },