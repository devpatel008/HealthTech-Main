const Vitals = require('../models/metrics')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')


const getAllPatients = async (req, res) => {
    const {
        user: { userId, name },
        // params: { id: jobId },
    } = req

    const result = await Vitals.find({
        doctor: userId
    }).select('createdBy')

    if (result) {

        const patients = await Promise.all(result.map(async (obj) => {
            // try {
            const res = await User.findOne({ _id: obj.createdBy }).select('name')
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
    // editVitals,
    // deleteJob,
    getAllPatients,
    // updateJob,
    // getJob,
}