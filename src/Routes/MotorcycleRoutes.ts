import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).create());

motorcycleRouter.get('/motorcycles', (request, response, next) =>
  new MotorcycleController(request, response, next).getAll());

motorcycleRouter.get('/motorcycles/:id', (request, response, next) =>
  new MotorcycleController(request, response, next).getById());
export default motorcycleRouter;
