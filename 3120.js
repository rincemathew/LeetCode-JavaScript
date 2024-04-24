// Count the Number of Special Characters I

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const smallMap = new Set()
    const capitalMap = new Set()

    for(let char of word){
        if(char>="a" && char<="z"){
            smallMap.add(char)
        }else{
            capitalMap.add(char)
        }
    }
    let count =0
    for(let char of  smallMap){
        if(capitalMap.has(char.toUpperCase())){
            count++
        }
    }
    return count
};