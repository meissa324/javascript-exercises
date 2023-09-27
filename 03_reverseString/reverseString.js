const reverseString = function(string) {

    let stringToArray = string.split('');
    const outputArray = [];
    for(let i = stringToArray.length ; i > -1 ; i-- ){
        
        outputArray.push(stringToArray[i]);
    }

    return outputArray.join("")


};






//npm test reverseString.spec.js

// Do not edit below this line
module.exports = reverseString;
