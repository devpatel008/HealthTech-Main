import mongoose from "mongoose";

const VitalData = new mongoose.Schema(
    {
        heartRate: {
            type: String,
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
            type: String,
            // required: [true, 'Please provide info']
        },
        temperature: {
            type: String,
            // required: [true, 'Please provide info']
        },
        respiratoryRate: {
            type: String,
            // required: [true, 'Please provide info']
        },
        sugarLevel: {
            type: String,
            // required: [true, 'Please provide info']
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