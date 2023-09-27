const repeatString = function(string,num) {

    let repeatWords="";
    if(num < 0){ repeatWords = "ERROR"}
    
    else{

        for(let i=0; i < num;i++ ){
            repeatWords += string;
        }
    }
    
    return repeatWords
};
 
//npm test repeatString.spec.js


// Do not edit below this line
module.exports = repeatString;
