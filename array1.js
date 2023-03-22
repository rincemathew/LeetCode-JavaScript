// Problem to find a given target from an array 

function twoNumberSum(arr, target){
    for (let i=0; i <arr.length -1; i++){
          for(let j=i+1; j< arr.length; j++){
            if(arr[i]+ arr[j] == target){
              return [arr[i],arr[j],target];
            }
          }
    }
  }
  console.log(twoNumberSum([6,5,4,7,8],10))
  