const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDoctors = async () => {
  return prisma.doctor.findMany();
};

module.exports = {
  getDoctors,
};
