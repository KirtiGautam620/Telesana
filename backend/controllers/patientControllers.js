// const prisma = require('../utils/prisma.js')

// async function getPatientProfile(req, res) {
//     try {
//         const userId = req.user.id
//         const patient = await prisma.patient.findUnique({
//             where: { userId },
//             include: {
//                 user: { select: { username: true, email: true } },
//                 healthPassbook: true
//             }
//         })

//         if (!patient) {
//             return res.status(404).json({ message: "Patient profile not found" })
//         }

//         res.status(200).json(patient)
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ error: "Failed to fetch patient profile" })
//     }
// }

// async function createPatientProfile(req, res) {
//     try {
//         const userId = req.user.id
//         const { fullName, phone, gender, dob } = req.body

//         const existingPatient = await prisma.patient.findUnique({
//             where: { userId }
//         })

//         if (existingPatient) {
//             return res.status(400).json({ message: "Patient profile already exists" })
//         }

//         const patient = await prisma.patient.create({
//             data: {
//                 fullName,
//                 phone,
//                 gender,
//                 dob: new Date(dob),
//                 userId
//             }
//         })

//         res.status(201).json({ message: "Patient profile created", patient })
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ error: "Failed to create patient profile" })
//     }
// }

// async function updatePatientProfile(req, res) {
//     try {
//         const userId = req.user.id
//         const { fullName, phone, gender, dob } = req.body

//         const patient = await prisma.patient.update({
//             where: { userId },
//             data: {
//                 fullName,
//                 phone,
//                 gender,
//                 dob: new Date(dob)
//             }
//         })

//         res.status(200).json({ message: "Patient profile updated", patient })
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ error: "Failed to update patient profile" })
//     }
// }

// module.exports = { getPatientProfile, createPatientProfile, updatePatientProfile }
