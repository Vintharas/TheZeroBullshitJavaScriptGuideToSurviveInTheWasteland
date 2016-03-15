export class Weapon {
  constructor(damage, rateOfFire, weight=10) {
    this.rateOfFire = rateOfFire;

    Object.assign(this,
    canBeWeighted(this, weight), {
      toString() { // closure
        return `an undescriptive weapon with ${damage} damage`;
      },
    }
   );
  }
  fire() {
    console.log(`You fire ${this}`);
  }
}

export class MutantSoldier {
  constructor(name, hp) {
    Object.assign(this, {name, hp}, canBeWeighted(this, 300));
  }
  toString() {
    return this.name;
  }
  attack() {
    // attack...
  }
  move() {
    // move...
  }
}

export class Wall {
  constructor(defense, hp) {
    Object.assign(this, {defense, hp}, canBeWeighted(this, 10000));
  }
  toString() {
    return 'a kick-ass wall';
  }
}

// Example Functional mixin that also encapsulates state
function canBeWeighted(item, weight) {
  Object.assign(item,{
    weight,
    examineWeight,
    pickUp
  });

  function examineWeight() {
    if (item.weight > 50) {
      console.log(`${item.toString()} looks heavy`);
    } else {
      console.log(`${item.toString()} looks light`);
    }
  }
  function pickUp() {
    if (weight > 50) {
      console.log(`${item.toString()} is too heavy, you can't pick it up`);
    } else {
      console.log(`You pick ${item} up`);
    }
  }
}

// Example object mixin that only encapsulates behavior (no data)
// we are going to mix it with a prototype that is shared across
// many objects (shared state across instances is not cool)
const canBeThrown = {
  throw() {
    console.log(`You throw ${this} away with great force`);
  }
};

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
  // heavy weapon with damage: undefined
}

export function testNew() {
  // ups, forgot the new keyword
  try {
    var weapon = ES5Weapon(10, 1);
    console.log(`weapon is : ${weapon}`);
  } catch (error) {
    console.log(error);
    // => cannot set property damage of undefined
    //    this.damage = damage;
  }
}

function ES5Weapon(damage, rateOfFire, weight=10) {
  this.damage = damage;
  this.rageOfFire = rateOfFire;
  this.weight = weight;
}

export function testFunctionalMixinWithClasses() {
  var weapon = new Weapon(10, 1);
  var mutant = new MutantSoldier('jaime', 100);
  var wall = new Wall(200, 10000);
  var stuff = [weapon, mutant, wall];
  stuff.forEach(s => {
    s.examineWeight();
    s.pickUp();
  });
  /*
     => an undescriptive weapon with 10 damage looks light
        You pick an undescriptive weapon with 10 damage up
        jaime looks heavy
        jaime is too heavy, you can't pick it up
        a kick-ass wall looks heavy
        a kick-ass wall is too heavy, you can't pick it up
  */
}

export function textObjectMixinWithClassPrototype() {
  // JavaScript allows you to augment any object at runtime;
  // if you hadn't noticed
  var gun = new Weapon(10, 5);
  gun.name = 'Falcon';
  console.log(`gun name is ${gun.name}`);
  // => gun name is falcon

  // but there's something even cooler
  // you can augment all objects that share the same prototype as well
  var bazooka = new HeavyWeapon(100,1);
  var grenade = new HeavyWeapon(1000, 1);

  // even at runtime! Waaaaat!
  Object.assign(Weapon.prototype, canBeThrown);
  [bazooka, grenade, gun].forEach(w => w.throw());
  /*
    =>  You throw an undescriptive weapon with 1000 damage away with great force
        You throw an undescriptive weapon with 10000 damage away with great force
        You throw an undescriptive weapon with 10 damage away with great force
  */

  // so what's a prototype?
}
