export class Weapon {
  constructor(damage, rateOfFire) {
    this.damage = damage;
    this.rateOfFire = rateOfFire;
  }
  toString() {
    return 'an undescriptive weapon with ' + this.damage + ' damage';
  }
}

export function fireWeapon() {
  var weapon = new Weapon(10, '1 round per second');
  console.log('You fire ' + weapon);
  // you fire an undescriptive weapon with 10 damage
}
