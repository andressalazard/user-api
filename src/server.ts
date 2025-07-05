import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dot} from 'node:test/reporters';
import authRoutes from './routes/auth.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth',authRoutes);

app.use('/',(req, res, next) => {
    res.status(200).json({
       message: "Welcome to the User API" 
    });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})