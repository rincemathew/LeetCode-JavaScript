// Can Place Flowers
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    counter = 0
    nthcount = 0
    for(i=0;i<flowerbed.length;i++) {
        if(flowerbed[i] == 0 && (flowerbed[i-1] == 0 || flowerbed[i-1] == undefined) && (flowerbed[i+1] == 0 || flowerbed[i+1] == undefined)) {
            counter++
            flowerbed[i] = 1
        }
        
    }
    if(counter >= n) {
        return true
    } else {
        return false
    }
};


console.log(canPlaceFlowers([0,0,0,0,0,1,0,0],0))