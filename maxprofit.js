var maxProfit = function(prices) {
    let min = Number.MAX_VALUE
    let max = 0;
  
    for(let i = 0; i < prices.length; i++){
        console.log('prices[i', prices[i])
        if(prices[i] < min){
           min = prices[i]
        } else if((prices[i] - min) >= max){
               max = prices[i] - min
            console.log('max', max)
        }
    }
    return max;
};

console.log('sol', maxProfit([1, 2]))