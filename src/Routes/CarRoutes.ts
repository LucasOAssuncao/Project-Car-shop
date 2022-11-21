import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter
  .route('/cars')
  .post((req, res, next) => new CarController(req, res, next).create());

carRouter.get('/cars', (req, res, next) =>
  new CarController(req, res, next).getAll());

carRouter.get('/cars/:id', (request, response, next) =>
  new CarController(request, response, next).getById());

carRouter.put('/cars/:id', (request, response, next) =>
  new CarController(request, response, next).update());

export default carRouter;
