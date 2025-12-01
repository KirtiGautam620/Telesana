const prisma = require('../utils/prisma.js')

async function getAppointments(req, res) {
    try {
        const userId = req.user.id
        const patient = await prisma.patient.findUnique({
            where: { userId }
        })

        if (!patient) {
            return res.status(404).json({ message: "Patient profile not found" })
        }

        const appointments = await prisma.appointment.findMany({
            where: { patientId: patient.id },
            include: {
                doctor: true
            },
            orderBy: { appointmentTime: 'desc' }
        })

        res.status(200).json(appointments)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to fetch appointments" })
    }
}

async function createAppointment(req, res) {
    try {
        const userId = req.user.id
        const { doctorId, mode, appointmentTime } = req.body

        const patient = await prisma.patient.findUnique({
            where: { userId }
        })

        if (!patient) {
            return res.status(404).json({ message: "Patient profile not found" })
        }

        const appointment = await prisma.appointment.create({
            data: {
                patientId: patient.id,
                doctorId,
                mode,
                appointmentTime: new Date(appointmentTime),
                status: 'SCHEDULED'
            },
            include: {
                doctor: true
            }
        })

        res.status(201).json({ message: "Appointment booked successfully", appointment })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to create appointment" })
    }
}

async function getDoctors(req, res) {
    try {
        const doctors = await prisma.doctor.findMany()
        res.status(200).json(doctors)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to fetch doctors" })
    }
}

module.exports = { getAppointments, createAppointment, getDoctors }
