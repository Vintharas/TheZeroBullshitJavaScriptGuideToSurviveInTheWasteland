export function TheWeapon(damage, rateOfFire, weight=10) {
  // damage is private by virtue of da closure
  // public API
  return {
    rateOfFire,
    weight,
    toString,
    fire
  };

  function toString() {
    return `an undescriptive weapon with ${damage} damage`;
  }
  function fire() {
    return console.log(`You fire ${toString()}`);
  }
}

export function fireTheWeapon() {
  var weapon = TheWeapon(10, 1);
  weapon.fire();
  // => You fire an undescriptive weapon 10 damage
}
