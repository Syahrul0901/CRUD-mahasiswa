import express from 'express';

import { getAllMahasiswa, createMahasiswa, getMahasiswaByid, updateMahasiswa, deleteMahasiswa } from '../controllers/Mahasiswa.js';

const router = express.Router();

router.get('/', getAllMahasiswa);
router.get('/:id', getMahasiswaByid);
router.post('/', createMahasiswa);
router.patch('/:id', updateMahasiswa);
router.delete('/:id', deleteMahasiswa);

export default router;
