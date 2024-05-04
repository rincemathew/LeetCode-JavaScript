// Check if Word Equals Summation of Two Words


var isSumEqual = function(firstWord, secondWord, targetWord) {
    let leng = 0
    leng = Math.max(firstWord.length, secondWord.length)
    leng = Math.max(leng, targetWord.length)


    first = ''
    sencond = ''
    tarrget = ''

    for(i=0;i<leng;i++) {
        if (i < firstWord.length) {
          first += String(firstWord[i].charCodeAt() - "a".charCodeAt())
        }
        if (i < secondWord.length) {
          sencond += String(secondWord[i].charCodeAt() - "a".charCodeAt())
        }
        if (i < targetWord.length) {
          tarrget += String(targetWord[i].charCodeAt() - "a".charCodeAt())
        }
    }
    return Number(first) + Number(sencond)===Number(tarrget)
    
};

console.log(isSumEqual("j", "j", "bi"));