import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private engineCapacity: number;
  private category: string;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.engineCapacity = motorcycle.engineCapacity;
    this.category = motorcycle.category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getcategory() {
    return this.category;
  }

  public setCategory(category: string) {
    this.category = category;
  }
}