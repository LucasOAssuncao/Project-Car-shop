import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CatchError from '../utils/CatchError';

export default class CarService {
  private model: CarODM;

  constructor() {
    this.model = new CarODM();
  }

  private createCarDomain(car: ICar | null): Car | undefined | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const cars = await this.model.create(car);

    return this.createCarDomain(cars);
  }

  public async getAll() {
    const cars = await this.model.getAll();
    const carDomain = cars.map((e) => new Car(e));
    return carDomain;
  }

  public async findById(id: string) {
    const car = await this.model.find(id);
    if (!car) {
      throw new CatchError('Car not found', 404);
    }
    return new Car(car);
  }
}
