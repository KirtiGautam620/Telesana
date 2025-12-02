const patientService = require("../services/patientService.js");

const genderMap = { M: "MALE", F: "FEMALE", Other: "OTHER" };

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const patient = await patientService.findPatientByUserId(userId);

    if (!patient) return res.status(404).json({ message: "Patient profile not found" });

    res.status(200).json(patient);
  } catch (err) {
    console.error("Get Profile Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const createProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    let { fullName, phone, gender, dob, height, weight, bloodGroup } = req.body;

    if (!fullName || !dob || !gender) {
      return res.status(400).json({ message: "Full name, gender, and DOB required" });
    }

    gender = genderMap[gender] || "OTHER";

    const existing = await patientService.findPatientByUserId(userId);
    if (existing) return res.status(400).json({ message: "Profile already exists" });

    const patient = await patientService.createPatient({
      userId,
      fullName,
      phone,
      gender,
      dob,
      height,
      weight,
      bloodGroup,
    });

    res.status(201).json({ message: "Profile created", patient });
  } catch (err) {
    console.error("Create Profile Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    let { fullName, phone, gender, dob, height, weight, bloodGroup } = req.body;

    if (!fullName || !dob || !gender) {
      return res.status(400).json({ message: "Full name, gender, and DOB required" });
    }

    gender = genderMap[gender] || "OTHER";

    const existing = await patientService.findPatientByUserId(userId);
    if (!existing) return res.status(404).json({ message: "Patient profile not found" });

    const updated = await patientService.updatePatient(userId, {
      fullName,
      phone,
      gender,
      dob,
      height,
      weight,
      bloodGroup,
    });

    res.status(200).json({ message: "Profile updated", patient: updated });
  } catch (err) {
    console.error("Update Profile Error:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProfile, createProfile, updateProfile };
