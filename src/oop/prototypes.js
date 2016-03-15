import { Weapon } from './classes';

export function testPrototypes() {
  // javascript has prototypical inheritance
  // every object has another object as prototype (so prototypes are just objects)
  var newObject = {};
  console.log(`new Object prototype is: ${Object.getPrototypeOf(newObject)}`);
  // => new Object prototype is: [Object object]

  // What is useful about prototypes?
  // Prototypes let use reuse code through prototypical inheritance
  // Classes are just syntactic sugar over prototypical inheritance
  // Methods defined at the class level are part of the prototype
  console.log(`Weapon prototype fire method => ${Weapon.prototype.fire}`);
  /* =>  Weapon prototype fire method => function fire() {
          console.log('You fire ' + this);
         }
  */
  // Methods defined within the constructor and bound to this are part of each instance
  console.log(`Weapon pickUp method not in prototype => ${Weapon.prototype.pickUp}`);
  // =>  Weapon prototype fire method => undefined

  // Instance and prototype establish a prototypical chain
  // where method calls are delegated from instance to prototype and down the chain (when there's several prototypes)
  var weapon = new Weapon(1,1);
  console.log(`weapon.toString(): ${weapon.toString()}`);
  // => weapon.toString(): an undescriptive weapon with 1 damage
  console.log(`Weapon.prototype.toString(): ${Weapon.prototype.toString()}`);
  // => weapon.toString(): [Object object]

  // This prototypical chain is why we can augment all instances
  // of a class via the prototype. Because all objects within a class
  // share the same prototype, if we augment it, all objects get those
  // new properties. Yippi!

}
