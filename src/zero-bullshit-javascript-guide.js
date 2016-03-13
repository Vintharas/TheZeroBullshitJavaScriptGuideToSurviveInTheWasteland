import { fireWeapon } from './oop/classes';

const zeroBullshitJavaScriptGuide = {
  test() {
    pipLog('Starting simulation');
    fireWeapon();
    pipLog('Completing simluation');
  }
};

function pipLog(message) {
  console.log(`

************************************************************
 PIP 4000 - ${message} -
************************************************************

  `);

}

export default zeroBullshitJavaScriptGuide;

// like a boss
zeroBullshitJavaScriptGuide.test();
