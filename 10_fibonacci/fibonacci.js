// npm test fibonacci.spec.js
const arr =[];

const fibonacci = function(num) {
    num = +num;//turns string into num, and if its already num remains the same
    if (num < 0) return "OOPS";//if its negative it gives error
    //create fibonacci sequence//efficiently
    sequenceLength(num+1);    
    //fill said sequence
    fillSequence(arr); 
    //return element at num position   
    if(num > 0){
        return arr[num];
    }
};

function sequenceLength(num){//creates length of sequence

    for(i=0; i<num ;i++){//this will add 0 to every position
        arr.push(0)
        }
    return arr;

}

function fillSequence(sequenceArr){//fills sequence with values

    sequenceArr[0]=0;
    sequenceArr[1]=1;
    sequenceArr[2]=1;

    for(let i=3; i<sequenceArr.length; i++){
        sequenceArr[i]= sequenceArr[i-1]+sequenceArr[i-2];
    }
    return sequenceArr;
}



// Do not edit below this line
module.exports = fibonacci;



