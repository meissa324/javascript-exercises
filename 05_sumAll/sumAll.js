const sumAll = function(num1, num2) {
    const numToAdd = [];
    let addNumbers = 0;

    if(typeof num1 !== 'number'|| typeof num2 !== 'number'){
        addNumbers = "ERROR";
    }

    else if(num1 < 0|| num2 <0){
        addNumbers = "ERROR";
        
    }

    else if(num2>num1){
        for(i=num1; i<=num2; i++){
            numToAdd.push(i);
            addNumbers += i;
        }

    }

    else if(num1>num2){
        for(i=num2; i<=num1; i++){
            numToAdd.push(i);
            addNumbers += i;
        }
    }

    else{
        addNumbers = "ERROR";
    }


    return addNumbers

};
//npm test sumAll.spec.js
// Do not edit below this line
module.exports = sumAll;
