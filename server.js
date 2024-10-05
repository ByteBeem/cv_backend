import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import personalInfoRoutes from './routes/personalInfoRoutes.js';
import educationRoutes from './routes/educationRoutes.js';
import workExperienceRoutes from './routes/workExperienceRoutes.js';
import skillsRoutes from './routes/skillsRoutes.js';
import projectsRoutes from './routes/projectsRoutes.js';
import contactRoutes from './routes/contactRoutes.js';


import { connectDB } from './config/db.js';


dotenv.config();
// app config
const app = express()
const port = 4000


// database
connectDB()


// middleware
app.use(express.json())
app.use(cors())



app.use('/personal-info', personalInfoRoutes);
app.use('/education', educationRoutes);
app.use('/work-experience', workExperienceRoutes);
app.use('/skills', skillsRoutes);
app.use('/projects', projectsRoutes);
app.use('/contact', contactRoutes);



app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})