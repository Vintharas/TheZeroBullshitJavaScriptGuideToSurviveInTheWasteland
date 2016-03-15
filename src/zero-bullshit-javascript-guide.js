import { Weapon, fireWeapon, testNew, testFunctionalMixinWithClasses, textObjectMixinWithClassPrototype } from './oop/classes';
import { testThis, testHowThisWorks } from './oop/this';
import { fireTheWeapon, testCallbackProblemWithFactories } from './oop/factories.js';
import { testComposition } from './oop/factories-composition.js';

const zeroBullshitJavaScriptGuide = {
  test() {
    console.log(pip`Starting simulation`);
    textObjectMixinWithClassPrototype();
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
