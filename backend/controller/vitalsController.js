import { Vitals } from "../models/vitalsSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";
export const updateVitals = catchAsyncErrors(async (req, res, next) => {
    const {
        heartRate,
        spO2,
        bloodCount,
        bloodPressure,
        temperature,
        respiratoryRate,
        sugarLevel,
      } = req.body;
  if (
    !heartRate ||
    !spO2 ||
    !bloodCount ||
    !bloodPressure ||
    !temperature ||
    !respiratoryRate ||
    !sugarLevel
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

      const vitals = result[0];
      // console.log(result);
    if (!vitals) {
      throw new NotFoundError(`No data found for this user!`);
    }
    res.status(200).json({
      success: true,
      vitals,
    });
  });