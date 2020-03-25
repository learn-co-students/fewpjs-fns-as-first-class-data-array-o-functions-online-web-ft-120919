function wakeDog(dogName, dogBreed) {
  const msg = `Wake ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

function leashDog(dogName, dogBreed) {
  const msg = `Leash ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

function walkToPark(dogName, dogBreed) {
  const msg = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

function throwFrisbee(dogName, dogBreed) {
  const msg = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

function walkHome(dogName, dogBreed) {
  const msg = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

function unleashDog(dogName, dogBreed) {
  const msg = `Unleash ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let results = [];
  for (let i = 0; i < routine.length; i++) {
    results.push(routine[i](dogName, dogBreed));
  }//for
  return results; 
}