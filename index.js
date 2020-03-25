function wakeDog(dogName, dogBreed) {
    const message = `Wake ${dogName} the ${dogBreed}`
    return message 
    // console.log(`Wake ${dogName} the ${dogBreed}`);
  }

  function leashDog(dogName, dogBreed) {
    const message = `Leash ${dogName} the ${dogBreed}`
    return message 
  }
  function walkToPark(dogName, dogBreed) {
    const message = `Walk to the park with ${dogName} the ${dogBreed}`;
    return message
  }
  function throwFrisbee(dogName, dogBreed) {
    const message = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return message
  }

  function walkHome(dogName, dogBreed) {
    const message = `Walk home with ${dogName} the ${dogBreed}`;
    return message
  }

  function unleashDog(dogName, dogBreed) {
    const message = `Unleash ${dogName} the ${dogBreed}`;
    return message
  }

//   function array
let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


function exerciseDog(dogName, dogBreed) {
    let results = [];
    for (let i = 0; i < routine.length; i++) {
      results.push(routine[i](dogName, dogBreed));
    }//for
    return results; 
  }