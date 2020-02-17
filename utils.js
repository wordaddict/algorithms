// Find second max value in an array
const maxSecondValue = (array) => {
    const sortedArray = array.sort((a, b) => {
        return b - a
    });

    return sortedArray[1]
};

const val = maxSecondValue([1, 12, 15, 65, 7])
console.log('val', [1, 2].concat([3, 4]))