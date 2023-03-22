
// To remove an element in an array

var removeElement = function(nums,val) {
    let index = 0
    for(let i =0;i <nums.length; i++){
      if(nums[i] != val){
          nums[index] = nums[i];
          index++;
      }
    }
      return nums[index]
}
console.log(removeElement([1,2,2,3,4],2))
