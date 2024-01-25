// Group Anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for(str of strs) {
        let sort = str.split('').sort().join('')
        if(!map.has(sort)) {
            map.set(sort,[str])
        } else {
            map.get(sort).push(str);
        }
    }
    return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //[["bat"],["nat","tan"],["ate","eat","tea"]]