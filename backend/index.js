const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes.js')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)

app.get("/", (req, res) => {
    res.send("Telesana backend running")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))



