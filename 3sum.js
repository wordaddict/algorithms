var threeSum_Brute = function(nums) {
    nums = nums.sort(function (a, b) {
      return a - b;
    });
  
    let uniqueTriplets = [];
    let i, j, k;
    let len = nums.length;
  
    for (i = 0; i < len; i++) {
      if (i > 0 && nums[i] === nums[i-1]) continue;  // The continue statement "jumps over" one iteration in the loop. So, if 2 successive elements are same (i.e. duplicates) leave this iteration and jump over to the next one
  
      for (j = i + 1; j < len; j++) {
        if ( j > i + 1 && nums[j] === nums[j-1]) continue;
  
        for (k = j + 1; k < len; k++) {
          if (k > j + 1 && nums[k] === nums[k - 1]) continue;
  
          if ((nums[i] + nums[j] + nums[k]) === 0) {
            uniqueTriplets.push([nums[i], nums[j], nums[k]]);
            // Very imp - I am wrapping individual elements nums[i], nums[j], nums[k] into a wrapper-array in the .push function. So that the final output comes in multiple array as required by the original problem statement.
          }
        }
      }
    }
    return uniqueTriplets;
   }

  // Will output - [[-1, 0, 1], [-1, -1, 2]]
   

const threeSum = (arr) => {
    let result = [];
    arr = arr.sort((a, b) => a - b);
    //console.log('arr', arr)
    for(let indexA = 0; indexA < arr.length - 2; indexA++){
        const a = arr[indexA];
        if(a === arr[indexA - 1]) continue;
        let indexB = indexA + 1;
        let indexC = arr.length - 1;
        while(indexB < indexC){
            const b = arr[indexB];
            const c = arr[indexC];
            if((a + b + c) === 0){
                result.push([a, b, c])
            };

            if((a + b + c) >= 0){
                indexC--
            }
            if((a + b + c) <= 0){
                indexB++
            }
        }
    }
};

console.time("threeSum_Brute");
threeSum_Brute([-1, 0, 1, 2, -1, -4])
console.timeEnd("threeSum_Brute");

console.time("threeSum");
threeSum([-1, 0, 1, 2, -1, -4])
console.timeEnd("threeSum");