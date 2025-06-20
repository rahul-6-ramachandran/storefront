import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import { cartRouter, productRouter } from './src/routes/index.js'
import { handleError } from './src/middlewares/errorHandling.js'
import { connectDB } from './src/config/database/connection.js'



const app = express()
configDotenv()
const PORT = process.env.PORT || 5555

// Database Connection
connectDB()

// middlewares
app.use(cors())
app.use(express.json())



app.get('/', (req,res)=>{
    console.log("Hello World")
    res.json({message : "Backend Connected"})
})

app.use('/api/product', productRouter)
app.use('/api/cart',cartRouter)

app.use(handleError);

// server config
app.listen(PORT,()=>{
    console.log("Server Running Successfully")
})