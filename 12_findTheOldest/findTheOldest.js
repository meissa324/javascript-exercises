//npm test findTheOldest.spec.js

const findTheOldest = function(people) {
//.yearOfBirth
//.yearOfDeath
//if it doesn't include yearOfDeath, then set it to 2024(use the property in)
//maybe use sort
//the return the first one, cut its the oldest
    const sortedPeople = sortByAge(people);
    return sortedPeople[0].name;
};

function sortByAge(people){
    return people.sort((a,b)=>{
        let deathYearA = a.yearOfDeath || 2024;
        let deathYearB = b.yearOfDeath || 2024;
        return (deathYearB - b.yearOfBirth)-(deathYearA - a.yearOfBirth);
    });
}
// Do not edit below this line
module.exports = findTheOldest;
