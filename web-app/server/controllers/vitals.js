const Heart = require('../models/metrics')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const heartData = async (req, res) => {
    req.body.createdBy = req.user.userId
    const heartDataa = await Heart.create(req.body)
    res.status(StatusCodes.CREATED).json({ heartDataa })
}

const getAllData = async (req, res) => {
    const {
        user: { userId, name },
        // params: { id: jobId },
    } = req

    const result = await Heart.find({

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
    heartData,
    // deleteJob,
    getAllData,
    // updateJob,
    // getJob,
}