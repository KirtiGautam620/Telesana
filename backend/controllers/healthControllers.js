const prisma = require('../utils/prisma.js')

async function getHealthPassbook(req, res) {
    try {
        const userId = req.user.id
        const patient = await prisma.patient.findUnique({
            where: { userId },
            include: {
                healthPassbook: true,
                prescriptions: {
                    include: {
                        doctor: true
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 10
                }
            }
        })

        if (!patient) {
            return res.status(404).json({ message: "Patient profile not found" })
        }

        res.status(200).json({
            healthPassbook: patient.healthPassbook,
            recentPrescriptions: patient.prescriptions
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to fetch health passbook" })
    }
}

async function updateHealthPassbook(req, res) {
    try {
        const userId = req.user.id
        const { healthData, riskLevel } = req.body

        const patient = await prisma.patient.findUnique({
            where: { userId }
        })

        if (!patient) {
            return res.status(404).json({ message: "Patient profile not found" })
        }

        const healthPassbook = await prisma.healthPassbook.upsert({
            where: { patientId: patient.id },
            update: {
                healthData,
                riskLevel
            },
            create: {
                patientId: patient.id,
                healthData,
                riskLevel
            }
        })

        res.status(200).json({ message: "Health passbook updated", healthPassbook })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to update health passbook" })
    }
}

module.exports = { getHealthPassbook, updateHealthPassbook }
