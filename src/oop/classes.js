export class Weapon {
  constructor(damage, rateOfFire) {
    this.damage = damage;
    this.rateOfFire = rateOfFire;
  }
  toString() {
    return `an undescriptive weapon with ${this.damage} damage`;
  }
}

export class HeavyWeapon extends Weapon {
  constructor(damage, rateOfFire) {
    super(damage * 10, rateOfFire / 2);
  }

  toString() {
    return `${super.toString()}. It looks heavy.`;
  }
}

export function fireWeapon() {
  var weapon = new Weapon(10, 1);
  console.log(`You fire ${weapon}`);
  // you fire an undescriptive weapon with 10 damage
  var heavyWeapon = new HeavyWeapon(10, 1);
  console.log(`You fire ${heavyWeapon}`);
}
