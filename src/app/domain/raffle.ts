export class Raffle {
    code!: string;
    name!: string;
    category!: string;
    quantity!: number;

  constructor(object = {}) {
    Object.assign(this, object);
  }
}
