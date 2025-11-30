const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')


const authRoutes = require('./routes/authRoutes.js')
const doctorRoutes = require('./routes/doctorRoutes.js')      
const patientRoutes = require('./routes/patientRoutes.js')    
const appointmentRoutes = require('./routes/appointmentRoutes.js') 

dotenv.config()
const app = express()

app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],   
}))
app.use(express.json())


app.use('/api/auth', authRoutes)
app.use('/api/doctor', doctorRoutes)           
app.use('/api/patient', patientRoutes)        
app.use('/api/appointment', appointmentRoutes) 

app.get("/", (req, res) => {
    res.send("Telesana backend running")
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))