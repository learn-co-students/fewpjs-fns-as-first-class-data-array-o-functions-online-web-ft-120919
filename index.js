function wakeDog(dogName, dogBreed) {
    const dogAction  = `Wake ${dogName} the ${dogBreed}`;
    console.log(dogAction);
    return dogAction
  }
function leashDog(dogName, dogBreed) {
    const dogAction = `Leash ${dogName} the ${dogBreed}`
    console.log(dogAction);
    return dogAction
  }
function walkToPark(dogName, dogBreed) {
    const dogAction = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(dogAction);
    return dogAction
  }
function throwFrisbee(dogName, dogBreed) {
    const dogAction = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(dogAction);
    return dogAction
  }
function walkHome(dogName, dogBreed) {
    const dogAction = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(dogAction);
    return dogAction
  }
function unleashDog(dogName, dogBreed) {
    const dogAction = `Unleash ${dogName} the ${dogBreed}`;
    console.log(dogAction);
    return dogAction
  }

  const routine = [wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog]

// function exerciseDog(dogName, dogBreed) {
//     let array = []
//     routine.forEach(f => {
//         array.push(f(dogName, dogBreed))
//     });
//     return array
// }

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
  }