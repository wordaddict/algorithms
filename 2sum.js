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


const sum = (data, target) => {
    let hash = {};
    for (let i = 0; i < data.length; i++){
        if(hash[data[i]]){
            return [hash[data[i]], i]
        }
        const val = target - hash[data[i]]
        hash[val] = i;
    };
};

const threeSum = (arr) => {
let results = [];
    arr.sort((a, b) => {
        return a - b;
    });
    for (let indexA = 0; indexA < arr.length - 2; indexA++){
        const a = arr[indexA]
        if(arr === arr[indexA - 1]) continue;
        let indexB = indexA + 1;
        let indexC = arr.length - 1;
        while(indexB < indexC){
            const b = arr[indexB];
            const c = arr[indexC];
            if((a + b + c) === 0){
                results.push([a, b, c])
            };

            if((a + b + c) > 0){
                indexC--
            }

            if((a + b + c) < 0){
                indexB++
            }
        }
    }
}