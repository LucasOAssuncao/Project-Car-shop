import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import CatchError from '../utils/CatchError';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  async create() {
    const newCar = await this.service.create(this.req.body);
    return this.res.status(201).json(newCar);
  }

  async getAll(): Promise<Response> {
    const cars = await this.service.getAll();
    return this.res.status(200).json(cars);
  }

  async getById(): Promise<Response | undefined> {
    try {
      const { id } = this.req.params;
      const car = await this.service.findById(id);
      return this.res.status(200).json(car);
    } catch (err) {
      if (err instanceof CatchError) {
        return this.res.status(err.status).json({ message: err.message });
      }
    }
  }

  async update(): Promise<Response | undefined> {
    try {
      const { id } = this.req.params;
      const updated = await this.service.update(id, this.req.body);
      if (updated) {
        return this.res.status(200).json(updated);
      }
    } catch (error) {
      if (error instanceof CatchError) {
        return this.res.status(error.status).json({ message: error.message });
      }
    }
  }
}
