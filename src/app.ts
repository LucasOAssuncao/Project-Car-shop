import express from 'express';
import carRouter from './Routes/CarRoutes';

const app = express();
app.use(express.json());

app.use(carRouter);

export default app;
