//npm test calculator.spec.js

const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total,current)=>{
     return total += current;
  },0);
};

const multiply = function(arr) {
  return arr.reduce((total,current)=>{
    return total *= current;
  },1)//change that to 1 cuz anything divided by 0 is 0.
};

const power = function(a,b) {//i did reduce at first but the expected input isn't an array, its 2 numbers
	return a**b
};

const factorial = function(num) {
	//multiplication of all numbers smaller than it together
  //0! ->1
  //if 0 return 1
  //otherwise create an array with a loop, that reduces it to 1//maybe we cna use reduce for this
  if(num ===0){
    return 1;
  }
  else{
    let arr =[];
    for(let i = num; i>0; i--){
      arr.push(i);
    }
    return arr.reduce((total,current)=>{
      return total *= current;
    },1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
