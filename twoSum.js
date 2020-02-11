var twoSum = function(nums, target) {
    const comp = {};
    let final = [];
     for(let i=0; i<nums.length; i++){
      
        console.log('comp', comp)
        console.log('comp[nums[i] ]', comp[nums[i] ])
         if(comp[nums[i] ]>=0){
             final.push([ comp[nums[i] ] , i])
         }
         comp[target-nums[i]] = i
     }
     return final
 };

 const res = twoSum([3, 2, 7, 13, 1, 8], 9)
 console.log('res', res)