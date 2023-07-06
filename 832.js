// Flipping an Image

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    newArr = []
    for(i=0;i<image.length;i++) {
        const imageArr = image[i]
        arr = []
        for(j=imageArr.length-1;j>=0;j--) {
            if(imageArr[j] === 0) {
                arr.push(1)
            } else {
                arr.push(0)
            }
        }
        newArr.push(arr)
    }
    return newArr
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))  //[[1,0,0],[0,1,0],[1,1,1]]