import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'

configDotenv()

const app = express()
const PORT = process.env.PORT || 5555

// middlewares
app.use(cors)
app.use(express.json())

app.get('/', (req,res)=>{
    console.log("Hello World")
    res.json({message : "Backend Connected"})
})


// server config
app.listen(PORT,()=>{
    console.log("Server Running Successfully")
})