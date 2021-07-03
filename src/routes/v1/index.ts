import express from 'express';
import newMusic from './music';
const router = express.Router();
router.use('/music', newMusic)

export default router;