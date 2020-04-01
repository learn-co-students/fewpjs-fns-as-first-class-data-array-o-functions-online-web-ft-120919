function dog(name, breed) {
  return `${name} the ${breed}`;
}

function wakeDog(name, breed) {
  return `Wake ${dog(name, breed)}`;
}

function leashDog(name, breed) {
  return `Leash ${dog(name, breed)}`;
}

function walkToPark(name, breed) {
  return `Walk to the park with ${dog(name, breed)}`;
}

function throwFrisbee(name, breed) {
  return `Throw the frisbee for ${dog(name, breed)}`;
}

function walkHome(name, breed) {
  return `Walk home with ${dog(name, breed)}`;
}

function unleashDog(name, breed) {
  return `Unleash ${dog(name, breed)}`;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(name, breed) {
  let result = [];
  for(let i = 0; i < routine.length; i++) {
    result.push(routine[i](name, breed));
  }
  return result;
}