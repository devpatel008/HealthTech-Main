const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
  medication: {
    type: "string",
    required: [true, "qwertyuiop"],
  },
  to: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Med", MedicationSchema);
