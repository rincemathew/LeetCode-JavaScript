// To search insert position

var searchInsert = function(nums,target){
    let left= 0, right = nums.length-1
  
    if(target<nums[left]) return 0;
    if(target>nums[right]) return nums.length;
   
      while(left <= right){
        let mid = Math.floor((left+right)/2)
      if(target === nums)
        return mid;
      else if(target< nums[mid])
        right = mid -1;
      else
        left = mid +1
      }
        return left;
  }
  
  console.log(searchInsert([2,4,6,8,9],8))
  