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
