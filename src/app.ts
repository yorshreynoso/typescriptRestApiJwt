import express, { Application } from "express";
const app: Application = express();
import authRoutes from './routes/auth';
import morgan from 'morgan';




//settings
app.set('PORT', 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/', authRoutes);

export default app;