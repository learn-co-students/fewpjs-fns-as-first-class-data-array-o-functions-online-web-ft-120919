function wakeDog(dogName, dogBreed) {
    const string = `Wake ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
  }


  function leashDog(dogName, dogBreed) {
      const string = `Leash ${dogName} the ${dogBreed}`;
      console.log(string);
      return string;
  }


   function walkToPark(dogName, dogBreed) {
    const string = `Walk to the park with ${dogName} the ${dogBreed}`;
        console.log(string);
            return string;
         }



   function throwFrisbee(dogName, dogBreed) {
     const string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
        console.log(string);
        return string;
   }

   function walkHome(dogName, dogBreed) {
     const string = `Walk home with ${dogName} the ${dogBreed}`;
        console.log(string);
            return string;
        }


   function unleashDog(dogName, dogBreed) {
    const string = `Unleash ${dogName} the ${dogBreed}`;
        console.log(string);
        return string;
   }

   let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
   function exerciseDog(dogName, dogBreed){
       let results = [];
    for (let i = 0; i < routine.length; i++) {
        results.push(routine[i](dogName, dogBreed));

    }
    return results;
   }
   