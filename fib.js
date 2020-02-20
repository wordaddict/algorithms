// // Fibonacci recursion

// const fib = (n) => {
//     if(n <= 1){
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2)
// }

// console.log(fib(6));

// Fibonacci Dynamic(memoization) programming
// let mem = [];
// const fib = (n) => {
//     if(mem[n]){
//         return mem[n];
//     }
//     if(n <= 1){
//         mem[n] = n;
//     } else {
//         mem[n] = fib(n - 1) + fib(n - 2)
//     }
//     return mem[n]
// }

// Fibonacci programming bottom up

const fibBottomUp = (n) => {
    let mem = [];
    for (let i = 0; i <= n; i++){
        if(i <= 1){
            mem[i] = i;
        } else {
            mem[i] = mem[i - 1] + mem[i - 2]
        }
    }
  
    return mem[n]
}

console.log(fibBottomUp(6));
"yes".charCodeAt

