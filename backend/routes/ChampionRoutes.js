import express from 'express';
import { createChampion, getChampions, getSingleChampion, updateChampion, deleteChampion } from '../controllers/ChampionsController.js';

const router = express.Router();

router.post('/', createChampion);
router.get('/', getChampions);
router.get('/:id', getSingleChampion);
router.put('/:id', updateChampion);
router.delete('/:id', deleteChampion);

export default router;