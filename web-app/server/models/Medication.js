const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
    medication: {
        type: "string",
    },
    to: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Med", MedicationSchema);