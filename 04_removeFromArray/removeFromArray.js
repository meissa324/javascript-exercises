const removeFromArray = function(array,...removed) {
    return array.filter(    (element) => !removed.includes(element)  );

};

// Do not edit below this line
module.exports = removeFromArray;


//npm test removeFromArray.spec.js