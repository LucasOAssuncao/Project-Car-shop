import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    this.status = car.status || false;
  }

  public getId() {
    return this.id;
  }
  public setId(id: string): void {
    this.id = id;
  }
  public getModel() {
    return this.model;
  }
  public setModel(model: string): void {
    this.model = model;
  }
  public getYear() {
    return this.year;
  }
  public setYear(year: number): void {
    this.year = year;
  }
  public getColor() {
    return this.color;
  }
  public setColor(color: string): void {
    this.color = color;
  }
  public getBuyValue() {
    return this.buyValue;
  }
  public setBuyValue(buyValue: number): void {
    this.buyValue = buyValue;
  }
  public getDoorsQty() {
    return this.doorsQty;
  }
  public setDoorsQty(doorsQty: number): void {
    this.doorsQty = doorsQty;
  }
  public getSeatsQty() {
    return this.seatsQty;
  }
  public setSeatsQty(seatsQty: number): void {
    this.seatsQty = seatsQty;
  }
  public getStatus() {
    return this.status;
  }
  public setStatus(status: boolean): void {
    this.status = status;
  }
}