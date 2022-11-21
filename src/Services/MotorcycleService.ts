import MotorcycleModel from '../Models/Motorcycle';
import MotorcycleDomain from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class CarService {
  private model: MotorcycleModel;

  constructor() {
    this.model = new MotorcycleModel();
  }

  async create(motorcycle: IMotorcycle) {
    const created = await this.model.create(motorcycle);
    return new MotorcycleDomain(created);
  }
}
