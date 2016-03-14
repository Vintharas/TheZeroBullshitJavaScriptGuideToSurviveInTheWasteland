import { Weapon } from './classes';
import fs from 'fs';

export class WeaponRepositoryOhYeah {
  getAll(done) {
    fs.readFile('./src/oop/weapons.json', 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      done(JSON.parse(data));
    });
  }
}

export class Shop {
  constructor() {
    this.wares = [];
    this.repo = new WeaponRepositoryOhYeah();
  }
  listWares() {
    if (!this.wares.length > 0) {
      this.wares = this.repo.getAll(function done(wares) {
        try {
          this.wares = wares;
          console.log(this.wares);
        } catch (error) {
          console.log('error: ' + error.message);
          // => error: cannot set wares of undefined!
        }
      });
    } else {
      console.log(this.wares);
    }
  }
}

export function testThis() {
  var repo = new Shop();
  repo.listWares();
}

export function testHowThisWorks() {
  var weapon = new Weapon(/* damage */ 10, /* rateOfFire */ 1);
  console.log('=== this with dot notation ===');
  // fire calls => console.log(`You fire ${this}`);
  weapon.fire();
  // => you fire an undescriptive weapon with 10 damage

  console.log('=== this unbound ===');
  var fireUnbound = weapon.fire;
  fireUnbound();
  // => you fire undefined

  console.log('=== this explicitly ===');
  fireUnbound.call(/* this */ weapon);
  // => you fire an undescriptive weapon with 10 damage
  fireUnbound.call(/* this */ 'jaime');
  // => you fire jaime

  console.log('=== this bound ===');
  var fireBound = weapon.fire.bind(weapon);
  fireBound();
  // => you fire an undescriptive weapon with 10 damage
}
