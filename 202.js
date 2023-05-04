/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    while(n!==1) {
        f = 0
        m=n.toString().split('')
        for(i=0;i<m.length;i++) {
            f = f + parseInt(m[i] ** 2)
            // console.log(f)
        }
        n = f
        if(n === 1) {
            return true
        } 
        if(n.toString().length<2 && n!= 7) {
            return false
        }
    }
    return true
};


console.log(isHappy(19)) //true
console.log(isHappy(2))  //false
console.log(isHappy(1111111)) //true