const patientService = require("../services/patientService.js");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPatient = async (req, res) => {
  try {
    const { userId, fullName, phone, gender, dob } = req.query

    if (!userId || !fullName) {
      return res.status(400).json({ error: "User ID and Name are required." });
    }

    console.log(`Processing patient: ${fullName}`)

    const patient = await patientService.getOrCreatePatient(userId, fullName, phone, gender, dob);

    res.status(200).json(patient);

  } catch (err) {
    console.error('Controller Error:', err.message);
    res.status(500).json({ error: err.message })
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const patient = await prisma.patient.findUnique({
      where: { userId },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });

    if (!patient) {
      return res.status(404).json({ message: "Patient profile not found" });
    }

    res.status(200).json(patient);
  } catch (err) {
    console.error('Get Profile Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

const createProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { fullName, phone, gender, dob } = req.body;

    if (!fullName || !gender || !dob) {
      return res.status(400).json({ message: "Full name, gender, and date of birth are required" });
    }

    // Check if patient already exists
    const existingPatient = await prisma.patient.findUnique({
      where: { userId }
    });

    if (existingPatient) {
      return res.status(400).json({ message: "Patient profile already exists" });
    }

    const patient = await prisma.patient.create({
      data: {
        userId,
        fullName,
        phone,
        gender,
        dob: new Date(dob)
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });

    res.status(201).json({ message: "Profile created successfully", patient });
  } catch (err) {
    console.error('Create Profile Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { fullName, phone, gender, dob } = req.body;

    if (!fullName || !gender || !dob) {
      return res.status(400).json({ message: "Full name, gender, and date of birth are required" });
    }

    const patient = await prisma.patient.findUnique({
      where: { userId }
    });

    if (!patient) {
      return res.status(404).json({ message: "Patient profile not found" });
    }

    const updatedPatient = await prisma.patient.update({
      where: { userId },
      data: {
        fullName,
        phone,
        gender,
        dob: new Date(dob)
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });

    res.status(200).json({ message: "Profile updated successfully", patient: updatedPatient });
  } catch (err) {
    console.error('Update Profile Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getPatient,
  getProfile,
  createProfile,
  updateProfile
};
