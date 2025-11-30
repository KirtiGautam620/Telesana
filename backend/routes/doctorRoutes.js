const router=require("express").Router() 

const doctorController=require("../controllers/doctorController.js");

router.get("/", doctorController.getDoctors);

module.exports = router;
