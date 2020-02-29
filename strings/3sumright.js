/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!nums || nums.length < 3)
        return [];
    
    nums.sort((a, b) => a - b); // O(n log n)
    
    return findAllSolutionsTwoPoint(nums);
	/** 
		This problem in particular ends up being one that the O notations can look either
		O ( n log n + n^2) = O(n^2)
		O ( n log n + n^3) = O(n^3)
		This happens since the largest term that grows faster is the square or the cube meaning that the sort is meaningless for time complexity. 
	**/
};

const findAllSolutionsTwoPoint = (nums) => {
    const resArr = [];
    const len = nums.length;
    
    for(let i = 0; i < len; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) // Skip numbers if they are the same
            continue;
        
        let j = i + 1;
        let k = len - 1;
        
        while (j < k) {
            if ((nums[i] + nums[j] + nums[k]) === 0) {
                resArr.push([nums[i], nums[j], nums[k]]); // Add to array result
                j++;
                while (j < k && nums[j] === nums[j - 1]) // Skip numbers if they are the same
                    j++;
                
            } else if ((nums[i] + nums[j] + nums[k]) < 0) { // If numbers are too low advance left pointer
                j++;
            } else { // Otherwise numbers are bigger than 0 reduce right pointer
                k--;
            }
        }
    }
    
    return resArr; // O(n ^ 2)
};

const findAllSolutionsHashMap = (nums) => {
    const resArr = [];
    const len = nums.length; 
    
    for(let i = 0; i < len; i++) {
        if (i !== 0 && nums[i] === nums[i - 1])  // Skip numbers if they are the same
            continue;

        const map = new Map();
        for (let j = i + 1; j < len; j++) {
            if (map.has((-nums[i]-nums[j]))) { // It finds in the hashmap the missing number to make 0
                resArr.push([ nums[i], nums[j], (-nums[i]-nums[j]) ]);
                
                while(j + 1 < len && nums[j] === nums[j + 1])  // Skip numbers if they are the same
                    j++;
            }
            map.set(nums[j]); // Set the number for future references in the loop
        }
    }
    
    return resArr; // O(n^3)
};