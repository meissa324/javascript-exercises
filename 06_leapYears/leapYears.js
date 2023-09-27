const leapYears = function(year) {

let result ;
 if(year%4===0 && year%100 !== 0){
        result = true;


  }

else if(year%400===0){

        result = true;

 }

else{
        result = false;
 }

 return result

};
// npm test leapYears.spec.js
// Do not edit below this line
module.exports = leapYears;
