const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]


const findTheOldest = function(people) {
    const oldest = people.sort(function (a, b) {
        const lastGuy =a.yearOfDeath - a.yearOfBirth;
        const nextGuy =b.yearOfDeath - b.yearOfBirth;

        return lastGuy > nextGuy ? -1 : 1;

    })
    return oldest;
};

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
