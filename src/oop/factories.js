import fs from 'fs';

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

class WeaponRepositoryOhYeah {
  getAll(done) {
    fs.readFile('./src/oop/weapons.json', 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      done(JSON.parse(data));
    });
  }
}

function Shop() {
  const repo = new WeaponRepositoryOhYeah();
  const wares = [];

  return {
    wares,
    listWares
  };

  // no need for this
  // and no problems with callbacks
  function listWares() {
    if (!wares.length > 0) {
      repo.getAll(allWares => {
        wares.push(...allWares);
        console.log(wares);
      });
    } else {
      console.log(wares);
    }
  }
}

export function testCallbackProblemWithFactories() {
  var shop = Shop();
  shop.listWares();
  // => lots'a wares
}
