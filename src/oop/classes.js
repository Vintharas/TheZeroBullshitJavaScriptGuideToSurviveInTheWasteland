export class Weapon {
  constructor(damage, rateOfFire, weight=10) {
    this.damage = damage;
    this.rateOfFire = rateOfFire;
  }
  toString() {
    return `an undescriptive weapon with ${this.damage} damage`;
  }
  fire() {
    console.log(`You fire ${this}`);
  }
}

export class HeavyWeapon extends Weapon {
  constructor(damage, rateOfFire, weight=50) {
    super(damage * 10, rateOfFire / 2, weight);
  }

  toString() {
    return `${super.toString()}. It looks heavy.`;
  }
}

export function fireWeapon() {
  var weapon = new Weapon(10, 1);
  weapon.fire();
  // you fire an undescriptive weapon with 10 damage
  var heavyWeapon = new HeavyWeapon(10, 1);
  heavyWeapon.fire();
  // you fire an undescriptive weapon with 100 damage. It looks heavy
}
