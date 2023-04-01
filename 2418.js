// Sort the People
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.


/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for(i=0;i<names.length-1;i++) {
        for(j=i+1;j<heights.length;j++) {
            if(heights[i]<heights[j]) {
                // temp = heights[i]
                // heights[i] = heights[j]
                // heights[j] = temp
                [names[i],names[j]]=[names[j],names[i]]
                // tempString = names[i]
                // names[i] = names[j]
                // names[j] = tempString
            }
        }
    }
    return names
};

console.log(sortPeople(["Mary","John","Emma"],[180,165,170])) //["Mary","Emma","John"]
console.log(sortPeople(["Alice","Bob","Bob"],[155,185,150]))   //["Bob","Alice","Bob"]