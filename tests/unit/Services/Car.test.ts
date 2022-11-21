import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Test route /car funcs', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Test post with sucess', async function () {
    const car: ICar = {
      model: 'Ford Ka',
      year: 2004,
      color: 'Black',
      status: true,
      buyValue: 20000,
      doorsQty: 4,
      seatsQty: 5,
    };
    const newCar: Car = new Car(car);

    sinon.stub(Model, 'create').resolves(newCar);

    const service = new CarService();
    const result = await service.create(car);

    expect(result).to.be.deep.equal(newCar);
  });

  it('Test get with sucess', async function () {
    const cars: ICar[] = [
      {
        id: '6376da92d88bd2bf7da9c932',
        model: 'Marea',
        year: 2003,
        color: 'Black',
        status: true,
        buyValue: 30000,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '6376daa4d88bd2bf7da9c933',
        model: 'Tempra',
        year: 1996,
        color: 'Black',
        buyValue: 20000,
        doorsQty: 2,
        seatsQty: 5,
        status: false,
      },
    ];

    sinon.stub(Model, 'find').resolves(cars);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(cars);
  });

  it('Test get by id with sucess', async function () {
    const car: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Tempra',
      year: 1996,
      color: 'Black',
      buyValue: 20000,
      doorsQty: 2,
      seatsQty: 5,
      status: false,
    };

    sinon.stub(Model, 'findOne').resolves(car);

    const service = new CarService();
    const result = await service.findById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(car);
  });

  it('Testing update motorcycles', async function () {
    const updatedCar: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Fox',
      year: 1996,
      color: 'red',
      buyValue: 20000,
      doorsQty: 2,
      seatsQty: 5,
      status: false,
    };

    const toUpdate = {
      color: 'red',
      buyValue: 20000,
      model: 'Fox',
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);
    sinon.stub(Model, 'findOne').resolves(updatedCar);

    const service = new CarService();
    const updated = await service.update('634852326b35b59438fbea2f', toUpdate);
    expect(updated).to.be.deep.equal(updatedCar);
  });
});
