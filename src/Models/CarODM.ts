import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  protected schema: Schema;
  protected model: Model<ICar>;

  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');

    this.schema = schema;

    this.model = models.Car || model('Car', this.schema);
  }
  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }
}
export default CarODM;