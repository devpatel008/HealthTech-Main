const Vitals = require('../models/metrics')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const editVitals = async (req, res) => {
    req.body.createdBy = req.user.userId
    try {
        const check = await User.findOne({ _id: req.body.doctor })
        if (check.role !== "Doctor") {
            res.status(StatusCodes.BAD_REQUEST).json("Please provide a valid doctor id")
        } else {
            const result = await Vitals.create(req.body)
            res.status(StatusCodes.CREATED).json({ result })
        }

    } catch (error) {
        res.json({ error });
    }
}

const getAllData = async (req, res) => {
    const {
        user: { userId, name },
        // params: { id: jobId },
    } = req

    const result = await Vitals.find({

        createdBy: userId,
    }).sort('-createdAt').limit(1)
    if (!result) {
        throw new NotFoundError(`No data for ${name}`)
    }
    res.status(StatusCodes.OK).json({ result })
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

module.exports = {
    editVitals,
    // deleteJob,
    getAllData,
    // updateJob,
    // getJob,
}