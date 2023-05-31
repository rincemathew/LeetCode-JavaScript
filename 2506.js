// Count Pairs Of Similar Strings


/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    count = 0
    let newArray = words.map((w) => 
        [...new Set(w)].sort().join()
    )
    for(i=0;i<newArray.length-1;i++) {
        for(j=i+1;j<newArray.length;j++) {
            if(newArray[i] == newArray[j]) {
                count++
            }
        }
    }
    // console.log(newArray)
    // bool = true
    // for(i=0;i<words.length-1;i++) {
    //     let set1 = new Set(words[i])
    //     for(j=i+1;j<words.length;j++) {
    //         let set2 = new Set(words[j])
    //         console.log(set1,set2)
    //         if(set1.size == set2.size) {
    //             for(f=0;f<set1.size;f++) {
    //                 setqa = [...set1]
    //                 if(!set2.has(setqa[f])) {
    //                     bool = false
    //                     console.log(setqa[f])
    //                     break
    //                 }
    //             }
    //             if(bool === true) {
    //                 count++
    //             }
                
    //         }
    //     }
    // }
    return count
};


// console.log(similarPairs(["nba","cba","dba"]))
// console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))
console.log(similarPairs(["aabb","ab","ba"]))