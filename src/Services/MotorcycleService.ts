import MotorcycleModel from '../Models/Motorcycle';
import MotorcycleDomain from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import CatchError from '../utils/CatchError';

export default class CarService {
  private model: MotorcycleModel;

  constructor() {
    this.model = new MotorcycleModel();
  }

  async create(motorcycle: IMotorcycle) {
    const created = await this.model.create(motorcycle);
    return new MotorcycleDomain(created);
  }

  public async getAll() {
    const motorcycles = await this.model.getAll();
    const motorcycleDomain = motorcycles.map(
      (e) => new MotorcycleDomain(e),
    );
    return motorcycleDomain;
  }

  public async getById(id: string) {
    const motorcycle = await this.model.find(id);
    if (!motorcycle) throw new CatchError('Motorcycle not found', 404);
    return new MotorcycleDomain(motorcycle);
  }
}
