const Vitals = require('../models/metrics')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const Med = require("../models/Medication")

const getAllPatients = async (req, res) => {
    const {
        user: { userId },
        // params: { id: jobId },
    } = req

    const result = await Vitals.find({
        doctor: userId
    }).select('createdBy')

    if (result) {

        const patients = await Promise.all(result.map(async (obj) => {
            // try {
            const res = await User.findOne({ _id: obj.createdBy }).select('name', '_id')
            return res.name
            // temp.push(res)
            console.log(res);
            // } catch (error) {
            //     res.json(error)
            // }
        }))
        // console.log({ _id: .createdBy })
        // console.log(temp)
        res.status(StatusCodes.OK).json({ patients })
    }
    if (!result) {
        throw new NotFoundError(`No patients under you`)
    }
}





const getPatient = async (req, res) => {
    const id = req.parmas.id;
    try {
        // const user = await User.findOne({ _id: id });
        const vitals = await Vitals.findOne({ createdBy: id }).sort('-createdAt').limit(1)

        if (!vitals) {
            res.send("No information havs been updated by the patient");
        }
        res.status(200).json({ vitals });

    } catch (error) {
        res.json({ error })
    }
};

const postMedication = async (req, res) => {
    const { Medication } = req.body;
    const id = req.params.id;
    const med = Med.create({ Medication, to: id });
    res.status(200).json({ Medication, to: id });
};

const getVitalsHistory = async (req, res) => {
    const id = req.parmas.id;
    try {

        const result = await Vitals.find({
            createdBy: id,
        }).sort('-createdAt')
        if (!result) {
            throw new NotFoundError(`No data for ${name}`)
        }
        res.status(StatusCodes.OK).json({ result })
    } catch (error) {
        res.json(error)
    }
}



module.exports = {
    // editVitals,
    // deleteJob,
    getVitalsHistory,
    getAllPatients,
    postMedication,
    getPatient
    // updateJob,
    // getJob,
}
// const updateJob = async (req, res) => {
//     const {
//         body: { company, position },
//         user: { userId },
//         params: { id: jobId },
//     } = req

//     if (company === '' || position === '') {
//         throw new BadRequestError('Company or Position fields cannot be empty')
//     }
//     const job = await Job.findByIdAndUpdate(
//         { _id: jobId, createdBy: userId },
//         req.body,
//         { new: true, runValidators: true }
//     )
//     if (!job) {
//         throw new NotFoundError(`No job with id ${jobId}`)
//     }
//     res.status(StatusCodes.OK).json({ job })
// }