const numbers = [1,3 , 4]; // [1, 6, 24]
function fact(n){
    if(n<=1)
        return 1;
    return fact(n-1)*n;
}
console.log(numbers.map(n=>fact(n)));