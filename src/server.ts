import express from 'express';
import authRoutes from './routes/authRoutes';
import booksRoutes from './routes/bookRoutes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(authRoutes);
app.use(booksRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});