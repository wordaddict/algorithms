const sum = (arr, target) => {
    let obj = {};
  //  let finalArray = [];
    for (let i = 0; i < arr.length; i++){
     
        if(obj[arr[i]]){
            return [obj[arr[i]], i]
           // finalArray.push([obj[arr[i]], i])
        }
        console.log('here', i, obj[arr[i]])
        let val = target - arr[i]
        obj[val] = i;
        console.log('obj', obj)
    }
    //return finalArray;
};

const data = [-1, 0, 1, 2, -1, -4]
//const data = [2, 3, 4, 5, 7]
const solution = sum(data, 3);
console.log('solution', solution)


if(s.length === 1){
    return 1;
 }
 let count = 0
 let letterObj = {};
 let maxNum  = 0;
 for(let i = 0; i < s.length; i++){
     if(letterObj[s[i]] === undefined){
         count += 1;
     } else{
         count = Math.min(i - letterObj[s[i]], count + 1);
     }
     maxNum = Math.max(maxNum, count);
     letterObj[s[i]] = i; //save the index
 }
 return maxNum;