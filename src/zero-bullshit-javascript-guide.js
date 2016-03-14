import { Weapon, fireWeapon, testNew } from './oop/classes';
import { testThis, testHowThisWorks } from './oop/this';

const zeroBullshitJavaScriptGuide = {
  test() {
    console.log(pip`Starting simulation`);
    testNew();
    console.log(pip`Completing simulation`);
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
