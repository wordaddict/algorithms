var maxSubArray = function(nums) {
    let n = nums.length;
    let currSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < n; i++) {
      currSum = Math.max(nums[i], currSum + nums[i]);
      maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};