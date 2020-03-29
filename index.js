function wakeDog(a, b){
    let str = `Wake ${a} the ${b}`;
    console.log(str);
    return str;
}

function leashDog(a, b){
    let str = `Leash ${a} the ${b}`;
    console.log(str);
    return str;
}

function walkToPark(a, b){
    let str = `Walk to the park with ${a} the ${b}`;
    console.log(str);
    return str;
}

function throwFrisbee(a, b){
    let str = `Throw the frisbee for ${a} the ${b}`;
    console.log(str);
    return str;
}

function walkHome(a, b){
    let str = `Walk home with ${a} the ${b}`;
    console.log(str);
    return str;
}

function unleashDog(a, b){
    let str = `Unleash ${a} the ${b}`;
    console.log(str);
    return str;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
    let activities=[];

    for(let i=0; i<routine.length; i++){
        let activity = routine[i](dogName,dogBreed);
        activities.push(activity);
    }
    return activities;
}