import express from "express";
import { configDotenv } from "dotenv";
import connectToDatabase from "./connection/db.js";
import router from "./routers/handleTodo.js";
import cors from "cors";



const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3001

connectToDatabase()

app.use("/",router)




app.listen(PORT,() => {
  console.log(`server is running on port ${PORT}`)
})
