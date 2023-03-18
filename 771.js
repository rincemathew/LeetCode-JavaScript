// Jewels and Stones


var numJewelsInStones = function(jewels, stones) {
    count = 0;
    for(i=0;i<jewels.length;i++){
        count += stones.split(jewels[i]).length-1
    }
    return count
};