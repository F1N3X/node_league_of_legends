import express from 'express';
import champion from './routes/ChampionRoutes.js';
import auth from './routes/AuthRoutes.js';


const router = express.Router();



router.use('/champions', champion);
router.use('/auth', auth);



export default router;