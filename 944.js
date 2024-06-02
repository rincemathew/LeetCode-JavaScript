// Delete Columns to Make Sorted


/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
     let del = 0;
     // Loop through each column
     for (let j = 0; j < strs[0].length; j++) {
       // Loop through each row except the last one
       for (let i = 0; i < strs.length - 1; i++) {
         // Compare the current character with the character in the next row
         if (strs[i][j] > strs[i + 1][j]) {
           // Increment the deletion count if the column is not sorted
           del++;
           break;
         }
       }
     }
     return del;
};

console.log(minDeletionSize(["cba","daf","ghi"]))