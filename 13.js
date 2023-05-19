// Roman to Integer


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // var map1 = new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]])
    // let count = 0
    // for(i=0;i<s.length;i++) {
    //     // symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    //     map1.get(s[i]) < map1.get[s[i+1]] ? count -= map1.get(s[i]) : count += map1.get(s[i])
    //     console.log(map1.get(s[i])<map1.get(s[i+1])?true:false)
    // }
    // return count
    symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
            value = 0;
        for(let i = 0; i < s.length; i+=1){
            symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
        }
        return value
};

console.log(romanToInt("MCMXCIV")) //1994