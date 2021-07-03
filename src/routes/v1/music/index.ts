import express from 'express'
//import findMusic from './findMusic';
import newMusic from './newMusic';
//import deleteMusic from './deleteMusic';
const router = express.Router();

router.use('/new',newMusic);
//router.use('/find',findMusic);
//router.use('/delete',deleteMusic);

export default router;