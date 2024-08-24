import express from 'express';
const app = express();
import env from 'dotenv';
import userRouter from '../routes/userRouter.js';
import { mongoConn } from '../config/mongo_connection.js';
env.config();
const PORT = process.env.PORT || 8000;
mongoConn(process.env.MONGO)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/users",userRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port 3000 ${PORT}`);
 });
