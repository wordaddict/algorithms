const data = [0,1,0,2,1,0,1,3,2,1,2,1]
const trap = (arr) => {
    let water = 0;
    let n =  arr.length;
    let maxLeftArray = new Array(n);
    let maxRight = 0
    maxLeftArray[0] = 0
    for (let i = 0; i < arr.length + 1; i++){
        maxLeftArray[i + 1] = Math.max(arr[i], maxLeftArray[i])
    }

    for (let i = arr.length - 1; i >= 0; i--){
        maxRight = Math.max(maxRight, arr[i]);
        const min = Math.min(maxRight, maxLeftArray[i])
        if(min > arr[i]){
            water += min - arr[i]
        }
    }
    return water;
};

trap(data)