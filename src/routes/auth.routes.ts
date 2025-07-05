import {Router} from 'express';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';

const router = Router();

router.post('/login',AuthController.login);
router.post('/register',AuthController.register);

// router.post('/login',(req, res) =>{
//     res.status(200).json({message:'Login successful'}); //200: OK
// });

// router.post('/register',(req,res) =>{
//     res.status(201).json({message:'Registration successful'}); //201: created
// })


export default router;