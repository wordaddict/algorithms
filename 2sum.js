const sum = (arr, target) => {
    let obj = {};
    let finalArray = [];
    for (let i = 0; i < arr.length; i++){
     
        if(obj[arr[i]] >= 0){
            finalArray.push([obj[arr[i]], i])
        }
        let val = target - arr[i]
        obj[val] = i;
        console.log('obj', obj)
    }
    return finalArray;
};

const data = [-1, 0, 1, 2, -1, -4]
//const data = [2, 3, 4, 5, 7]
const solution = sum(data, 0);
console.log('solution', solution)