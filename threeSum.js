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
  
  console.log(threeSum_Brute([-1, 0, 1, 2, -1, -4]));
  // Will output - [[-1, 0, 1], [-1, -1, 2]]
   