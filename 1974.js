// Minimum Time to Type Word Using Special Typewriter

var minTimeToType = function(word) {

    let counter = 0
    let charc = 'a'

    for(i=0;i<word.length;i++) {
        let diff = word[i].charCodeAt(0)- charc.charCodeAt(0);
        // console.log(diff)

        if(diff > 14) {
            counter += 26 - diff + 1
        } else {
            counter += diff + 1
        }
        charc = word[i]
    }
    return counter
};

console.log(minTimeToType("abc"));