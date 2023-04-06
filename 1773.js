// Count Items Matching a Rule

// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    var i = ruleKey == 'type' ? 0 : ruleKey == 'color' ? 1 : 2
    count = 0
    for(j=0;j<items.length;j++) {
        items[j][i] == ruleValue ? count++ : ''
    }
    return count
};


console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],"type", "phone"))
console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color","silver"))