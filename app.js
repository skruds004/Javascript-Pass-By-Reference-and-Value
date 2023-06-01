const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}

/*************************************************************
 * Move Location Problem
 * Make a function that takes a location and person object and 
 * sets the persons location to that location
 ************************************************************/

function moveLocation(person, location) {
    person.location.city = location.city;
    person.location.state = location.state;
    person.location.zip = location.zip;
}

const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
}

moveLocation(personTwo, nLoc);

nLoc.city = 'Buffalo';
nLoc.zip = 14201;

console.log(personTwo.location);

/****************************************************************
 * Julie and Timmy are Married! Move them in together
 * Set Julie's location to Timmy's location by reference
 *****************************************************************/

personTwo.location = personOne.location;
const nLoc2 = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}

moveLocation(personOne, nLoc2);
console.log(personOne.location, personTwo.location);

/****************************************************************
 * The couple are having a baby. Create a new person object
 * The new person's location is a reference to the parents location
 ****************************************************************/

const personThree = {
    name: {
        first: 'Gubb',
        last: 'Fish'
    },
    age: 0
}
personThree.location = personOne.location;
//they moved back to Buffalo
moveLocation(personOne, nLoc);
console.log(personThree);

/***************************************************************** 
 * Person Three gets an independent location and older. Break the reference
 *****************************************************************/
let jsonString = JSON.stringify(personThree.location);

personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;

personThree.location = JSON.parse(jsonString);

const nLoc3 = {
    city: 'Badaxe',
    state: 'Michigan',
    zip: 42069
}

moveLocation(personThree, nLoc3);
console.log(personThree, personOne);

/*************************************************************************
 * Cloning is invented!
 * Everyone gets a lot older
 * Create a function clonePerson that makes deep copies with an age of 0
 *************************************************************************/