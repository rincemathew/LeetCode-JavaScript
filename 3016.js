// Minimum Number of Pushes to Type Word II

var minimumPushes = function(word) {
    let map = new Map()

    for(i=0;i<word.length;i++) {
        if(map.has(word[i])) {
            map.set(word[i],map.get(word[i])+1)
        } else {
            map.set(word[i],1)
        }
    }

    map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    let answer = 0
    let temp = 0
    let counter = 1
    map.forEach((value)=>{
        answer += (value * counter)
        temp++
        // console.log(temp)
        if (temp === 8) {
            temp = 0
            counter = counter+1
        }
    })

    return answer
};

console.log(minimumPushes("xyzxyzxyzxyz"));
console.log(minimumPushes("aabbccddeeffgghhiiiiii"));  //24