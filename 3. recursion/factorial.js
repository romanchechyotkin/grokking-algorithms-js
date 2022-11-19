const factorial = (num) => {
    if (num === 1 || num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5)) // 5! = 120
console.log(factorial(7)) // 5! = 5040
console.log(factorial(0)) // 5! = 1
