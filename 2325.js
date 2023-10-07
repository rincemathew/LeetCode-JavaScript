// Decode the Message

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    result =""
    j=0
    key = key.split(" ").join("")
    const letters = new Map([])
    for(i=0;i<key.length;i++) {
        if(!letters.has(key[i])) {
            letters.set(key[i],j)
            j++
        }
        if(j>26) {
            break;
        }
    }
    for(i=0;i<message.length;i++) {
        if(message[i] === " ") {
            result+= " "
        } else {
            result += String.fromCharCode(letters.get(message[i])+97) 
        }
    }
    return result
};

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));  //"this is a secret"