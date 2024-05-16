


var isValid = function(word) {
    if(word.length < 3) {
        return false
    }

    const vowels = new Set(['a','e','i','o','u']);
    const consnant = new Set(['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']);
    const number = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

    let vo = false
    let con = false
    let another = true


    for(i=0;i<word.length;i++) {
        const char = word[i].toLowerCase();
        
        if(vowels.has(char)) {
            vo = true
        } else if (consnant.has(char)) {
          con = true;
        } else if (number.has(char)) {
        } else {
          another = false;
        }
    }
    console.log(vo,con,another)
    return vo && con && another
};


console.log(isValid("a3e"))
console.log(isValid("234Adas"));