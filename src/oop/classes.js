// privacy with symbols
let damageSymbol = Symbol('damage');

export class Weapon {
  constructor(damage, rateOfFire, weight=10) {
    this[damageSymbol] = damage;
    this.rateOfFire = rateOfFire;
    this.weight = weight;
  }
  toString() {
    return `an undescriptive weapon with ${this[damageSymbol]} damage`;
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

  // testing privacy
  console.log(`heavy weapon damage: ${heavyWeapon.damage}`);
  // only through access to the symbol can you access the variable
  console.log(`heavy weapon damage: ${heavyWeapon[damageSymbol]}`);
}
