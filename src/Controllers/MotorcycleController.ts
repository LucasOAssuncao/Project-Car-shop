import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import CatchError from '../utils/CatchError';

export default class MotorcycleController {
  private service: MotorcycleService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.service = new MotorcycleService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async create(): Promise<Response> {
    const Motorcycle = await this.service.create(this.req.body);
    return this.res.status(201).json(Motorcycle);
  }

  async getAll(): Promise<Response> {
    const allMotorcycles = await this.service.getAll();
    return this.res.status(200).json(allMotorcycles);
  }

  async getById(): Promise<Response | undefined> {
    try {
      const { id } = this.req.params;
      const motorcycle = await this.service.getById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      if (error instanceof CatchError) {
        return this.res.status(error.status).json({ message: error.message });
      }
    }
  }
}
