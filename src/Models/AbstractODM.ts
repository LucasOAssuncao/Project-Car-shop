import { Model, models, Schema, model, isValidObjectId } from 'mongoose';
import CatchError from '../utils/CatchError';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async find(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CatchError('Invalid mongo id', 422);
    return this.model.findOne({ _id: id });
  }

  public async update(id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CatchError('Invalid mongo id', 422);

    return this.model.findByIdAndUpdate(id, obj, { new: true });
  }
}

export default AbstractODM;
