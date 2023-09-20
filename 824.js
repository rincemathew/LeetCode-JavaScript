// Goat Latin

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    result = []
    const set = new Set(['a','e','i','o','u'])
    sentence = sentence.split(" ")
    for(i=0;i<sentence.length;i++) {
        let temp = []
        if(set.has(sentence[i][0].toLowerCase())) {
            temp = sentence[i].split('')
            temp.push('ma')
            for(j=0;j<i+1;j++) {temp.push('a')}
            result.push(temp.join(''))
        } else {
            temp = sentence[i].split('')
            temp.push(temp.shift())
            temp.push('ma')
            for(j=0;j<i+1;j++) {temp.push('a')}
            result.push(temp.join(''))
        }
    }

    return result.join(' ')
};

console.log(toGoatLatin("I speak Goat Latin"))  //"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"