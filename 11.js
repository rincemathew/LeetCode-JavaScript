// Container With Most Water


var maxArea = function(height) {
    let max = 0

    for(i=0;i<height.length-1;i++) {
        temp = 0
        for(j=i+1;j<height.length;j++) {
            temp = Math.max(temp,(j - i) * Math.min(height[i], height[j]));
        }
        // console.log(temp, max);
        max = Math.max(temp,max)
    }
    return max
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
// console.log(maxArea([1, 1]));