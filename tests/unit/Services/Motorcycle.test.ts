import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Test route /car funcs', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Test post with sucess', async function () {
    const motorcycle: IMotorcycle = {
      model: 'Kawasaki Ninja',
      year: 1995,
      color: 'Black',
      status: true,
      buyValue: 30000,
      category: 'Street',
      engineCapacity: 1000,
    };
    const newMotorcycle = new Motorcycle(motorcycle);

    sinon.stub(Model, 'create').resolves(newMotorcycle);

    const service = new MotorcycleService();
    const result = await service.create(motorcycle);

    expect(result).to.be.deep.equal(newMotorcycle);
  });

  it('Test get with sucess', async function () {
    const motorcycles: IMotorcycle[] = [
      {
        id: '624832326b35b59438fbea1c',
        model: 'Honda',
        year: 2004,
        color: 'Black',
        status: true,
        buyValue: 20000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852325b35b59438fbea32',
        model: 'Kawasaki Z400',
        year: 2022,
        color: 'Orange',
        status: true,
        buyValue: 20000,
        category: 'Street',
        engineCapacity: 600,
      },
    ];

    sinon.stub(Model, 'find').resolves(motorcycles);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motorcycles);
  });

  it('Testing Endpoint to list motorcycles By ID', async function () {
    const motorcycle: IMotorcycle = {
      id: '634852326b35b59438fbea31',
      model: 'Kawasaki Ninja',
      year: 1995,
      color: 'Black',
      status: true,
      buyValue: 30000,
      category: 'Street',
      engineCapacity: 1000,
    };

    sinon.stub(Model, 'findOne').resolves(motorcycle);

    const service = new MotorcycleService();
    const result = await service.getById('634852326b35b59438fbea31');

    expect(result).to.be.deep.equal(motorcycle);
  });
});
