import express from 'express';
import db from './config/database.js';
import mahasiswaRoutes from './routes/index.js';
import cors from 'cors';

const app = express();

try {
  await db.authenticate();
  console.log('Database connected.....');
} catch (error) {
  console.error('Connection erro:', error);
}
app.use(cors());
app.use(express.json());
app.use('/mahasiswa', mahasiswaRoutes);

app.listen(3000, () => console.log('Server running at port 3000'));
