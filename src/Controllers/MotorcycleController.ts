import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

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
}
