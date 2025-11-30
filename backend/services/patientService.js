const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const getOrCreatePatient = async (userId, fullName, phone, gender, dob) => {
  try {
    let patient = await prisma.patient.findFirst({
      where: { userId: userId, fullName: fullName },
    });

    if (patient) {
      return patient;
    }

    console.log(`Creating new patient: ${fullName}`)

    patient = await prisma.patient.create({
      data: {
        userId: userId,
        fullName: fullName,
        phone: phone || "0000000000",       
        gender: gender || "Other",          
        dob: dob? new Date(dob) : new Date(), 
      },
    });

    return patient;
  } catch (error) {
    console.error("Error in getOrCreatePatient:", error);
    throw new Error(error.message)
  }
};

module.exports = { getOrCreatePatient }