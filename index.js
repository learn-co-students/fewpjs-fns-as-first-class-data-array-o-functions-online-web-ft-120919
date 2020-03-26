function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
  }

  function leashDog(dogName, dogBreed) {
      console.log(`Leash ${dogName} the ${dogBreed}`);
      return `Leash ${dogName} the ${dogBreed}`;
  }

  function walkToPark(dogName, dogBreed) {
      console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
      return `Walk to the park with ${dogName} the ${dogBreed}`;
  }
  
  function throwFrisbee(dogName, dogBreed) {
      console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
      return `Throw the frisbee for ${dogName} the ${dogBreed}`;
  }

  function walkHome(dogName, dogBreed) {
      console.log(`Walk home with ${dogName} the ${dogBreed}`);
      return `Walk home with ${dogName} the ${dogBreed}`;
  }

  function unleashDog(dogName, dogBreed) {
      console.log(`Unleash ${dogName} the ${dogBreed}`);
      return `Unleash ${dogName} the ${dogBreed}`;
  }

    let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

    function exerciseDog(dogName, dogBreed) {
        routine = routine.map((activity) => {
            return activity(dogName, dogBreed)
            }
        )
        return routine
    }

    // function exerciseDog(dogName, dogBreed) {
    //     for(let counter = 0; counter < routine.length; counter++)
    //     routine[counter](dogName, dogBreed);
    // }



//       it("accepts 2 parameters for dogName and dogBreed", () => {
//         const a = "Skippy"
//         const b = "Welsh Corgi"
//         expect(wakeDog(a, b)).to.equal(`Wake Skippy the Welsh Corgi`)
//       })
//     })
  
//     describe("the array of functions", () => {
//       it("has variables for each activity", () => {
//         expect(wakeDog).to.exist
//         expect(leashDog).to.exist
//         expect(walkToPark).to.exist
//         expect(throwFrisbee).to.exist
//         expect(walkHome).to.exist
//         expect(unleashDog).to.exist
//       })
//       it("has an array called 'routine' that contains each activity", () => {
//         expect(routine).to.be.a('array');
//         expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
//       })
//     })
  
//     describe("the function that runs the array o' functions", () => {
//       it("calls into the independent functions", () => {
//         expect(routine).to.be.a('array');
//         expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
//         expect(throwFrisbee).to.exist
  
//         const executedMessages = exerciseDog("Esther", "Dalmation")
  
//         const successMessages =  'Wake Esther the Dalmation',
//           'Leash Esther the Dalmation',
//           'Walk to the park with Esther the Dalmation',
//           'Throw the frisbee for Esther the Dalmation',
//           'Walk home with Esther the Dalmation',
//           'Unleash Esther the Dalmation' ]
  
//         result = successMessages.every(msg => executedMessages.indexOf(msg) >= 0);
//         expect(result, "exerciseDog should run all the functions in the 'routine' array").true
//       })
//     })
//   });
  