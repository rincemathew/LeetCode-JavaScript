// Valid Perfect Square

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    //taylor series
     // 1+3+5+7 = 16 .. 
     let i = 1;
     while(num > 0){
         num -= i;
         i += 2
     }
     return num === 0

     
};

console.log(isPerfectSquare(16))