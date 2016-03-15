/*
*
* Object composition
*   Define objects in terms of what they can do (behavior)
*   instead of in terms of what they are (class)
*   See "composition over inheritance" => https://www.youtube.com/watch?v=wfMtDGfHWpA
*
* --- Animal
*  |    |- poop
*  |
*  |------ Dog
*  |        |- /poop/
*  |        |- bark
*  |
*  |------ Cat
*           |- /poop/
*           |- meow
*
*
* --- Robot
*  |    |- drive
*  |
*  |------ CleanerRobot
*  |        |- /drive/
*  |        |- clean
*  |
*  |------ KillerRobot
*  |        |- /drive/
*           |- kill
*
*
*
*  New requirement: RobotKillerDog???
*   - RobotKillerDog with bark method
*     - duplicated bark
*   - WorldObject parent to Robot and Animal with bark
*     - Removes duplication
*     - inherited unused method in other classes
*
*
*  Using composition
*     - Define behavior as composable units (objects or functions) => barker, pooper, cleaner, killer, drive, etc
*     - Define factories in terms of these composable units
*       - RobotKillerDog = barker + driver + killer
*
*
*/

const barker = (state) => ({
  bark: () => console.log(`Woof, Woof, I am ${state.name}`)
});
const driver = (state) => ({
  drive: () => {
    state.position.x += state.position.x + state.speed;
    state.position.y += state.position.y + state.speed;
    console.log(`${state.name} moves to position (${state.position.x}, ${state.position.y})`);
  }
});
const killer = (state) => ({
  kill: (target) => console.log(`${state.name} kills ${target.name}. Maniac!`)
});

// or function RobotKillerDog
export const RobotKillerDog = (name) => {
  // privates
  let state = {
    name,
    speed: 1,
    position: {x: 0, y: 0}
  };

  // public API
  return Object.assign({},
    barker(state),
    driver(state),
    killer(state),
    {
      get name() {
        return state.name;
      }
    }
  );
};

export function testComposition() {
  var thor = RobotKillerDog('Thor');
  var odin = RobotKillerDog('Odin');

  thor.bark();
  // => Woof, Woof, I'm Thor
  thor.drive();
  // => Thor moves to position (1,1)
  thor.kill(odin);
  // => Thor kills Odin. Maniac!
}

const pooper = (state) => ({
  poop: () => console.log(`${state.name} poops`)
});

// composing new objects from these behaviors is very straight forward
function Dog(name) {
  let state = {name};
  return Object.assign({},
    barker(state),
    pooper(state)
  );
}

function KillerRobot() {
  let state = {name, speed: 0, position: {x: 0, y: 0}};
  return Object.assign({},
    driver(state),
    killer(state)
  );
}

// etc

// Advantages
//   - super flexibility
//   - code reusable
//   - less code required than using class composition (via delegation)
//   - no problems with this/new
// Disadvantages
//   - there's a lot of implicit things going on here that may cause errors at runtime
//     - the contract of what is required from state is define in a mixin implementation
//     - cannot define requirements
//     - can have name collisions with mixins
//   - there's more sofisticated object composition solutions
