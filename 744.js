// Find Smallest Letter Greater Than Target

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    value = false
    const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const greatest = new Set(letters)

    for(i=0;i<alpha.length;i++) {
        if(value && greatest.has(alpha[i])) {
            return alpha[i]
        }
        if(alpha[i] == target) {
            value = true
        }
        
    }
    return Array.from(greatest)[0]
};

console.log(nextGreatestLetter(["c","f","j"],"z"))