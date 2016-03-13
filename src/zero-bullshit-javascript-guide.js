import { Weapon, fireWeapon } from './oop/classes';

const zeroBullshitJavaScriptGuide = {
  test() {
    console.log(pip`Starting simulation`);
    fireWeapon();
    // more stuff
    let weapon = new Weapon(10, 1);
    // closures give you true privacy
    console.log(`weapon damage: ${weapon.damage}`);
    // => weapon damage: undefined
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
