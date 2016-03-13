import { fireWeapon } from './oop/classes';

const zeroBullshitJavaScriptGuide = {
  test() {
    console.log(pip`Starting simulation`);
    fireWeapon();
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
