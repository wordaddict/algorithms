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
