import History from "../models/historySchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";
export const addHistory = catchAsyncErrors(async (req, res, next) => {
    const {
          name,
          gender,
          age,
          contactNumber,
          allergies,
          otherMedications,
          conditions,
          symptoms,
          alcoholCosumption

      } = req.body;
  if (
    !name ||
    !gender ||
    !age ||
    !contactNumber ||
    !allergies ||
    !otherMedications ||
    !conditions ||
    !symptoms ||
    !alcoholCosumption 
  ) {
    return next(new ErrorHandler("Please give all vitals!", 400));
  }
const createdBy = req.user._id;
const vitals = await Vitals.create({
    heartRate,
    spO2,
    bloodCount,
    bloodPressure,
    temperature,
    respiratoryRate,
    sugarLevel,
    createdBy,
});
res.status(200).json({
    success: true,
    vitals,
    message: "Vitals updated!",
  });
});


export const getLatestVitals = catchAsyncErrors(async (req, res) => {

  
    const result = await Vitals.find({
      createdBy: req.user._id,
    })
      .sort("-createdAt")
      .limit(1);
    if (!result) {
      throw new NotFoundError(`No data for ${name}`);
    }
    res.status(200).json({ result });
  });

