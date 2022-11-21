import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class Motorcycle extends AbstractODM<IMotorcycle> {
  protected schema: Schema;
  protected model: Model<IMotorcycle>;

  constructor() {
    const schema = new Schema<IMotorcycle>({
      color: { type: String, required: true },
      model: { type: String, required: true },
      buyValue: { type: Number, required: true },
      status: { type: Boolean, required: false, default: false },
      year: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { versionKey: false });

    super(schema, 'motorcycles');

    this.schema = schema;

    this.model = models.motorcycles || model('motorcycles', this.schema);
  }
}