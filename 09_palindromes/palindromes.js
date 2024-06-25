//should be the same sequence of letters backwards and forwards
// npm test palindromes.spec.js
const palindromes = function (string) {
    //turn string to array
    //create another array but backwards
    //compare them
    //remove any space or punctuation before testing
    const arr = splitString(string);
    filteredArr = filterString(arr);//had to assign it cut it created a new array, it didn't modify our old one
    const arrReverse = reverseArr(filteredArr);

    return isArrayEqual(filteredArr,arrReverse)
   
};

function splitString(string){
    return string.toLowerCase().split('');//separates them by character
}

function filterString(arr){
    return arr.filter((element)=>{//removes punctuation, but its creating a new array not modifying it
        if(element === "!"){
            return false;
        }
        else if(element === "."){
            return false;
        }
        else if(element === ","){
            return false;
        }
        else if(element === " "){
            return false;
        }
        else{return true}

    })
    
}

function reverseArr(arr){
    return arr.slice().reverse();

}

function isArrayEqual(arr1,arr2){
    //first check array lengths are the same
    //if they are the same are the elements the same
    if(arr1.length !== arr2.length){
        return false
    }
    for( let i =0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
// Do not edit below this line
module.exports = palindromes;
