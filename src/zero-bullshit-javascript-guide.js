import { Weapon, fireWeapon } from './oop/classes';

const zeroBullshitJavaScriptGuide = {
  test() {
    console.log(pip`Starting simulation`);
    fireWeapon();
    // more stuff
    let weapon = new Weapon(10, 1);
    // no access to symbol that is private to the classes module
    try {
      console.log(`weapon damage: ${weapon[damageSymbol]}`);
    } catch (error) {
      console.error(`ups ---> ${error.message}`);
    }
    // but...
    let evilSymbol = Object.getOwnPropertySymbols(weapon)[0];
    console.log(`weapon damage: ${weapon[evilSymbol]}`);
    // => weapon damage: 10 ups
    console.log(pip`Completing simluation`);
  }
};

// tag, reusable formatting function
function pip(literals /*[, substitutions]*/) {
  return `
************************************************************
  PIP 4000 - ${literals.join(' - ')} -
************************************************************
  `;
}

export default zeroBullshitJavaScriptGuide;

// like a boss
zeroBullshitJavaScriptGuide.test();
