// output natural numbers from 1 to n

const fibonacci = (n) => {
    if (n <= 1) {
        return n
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

console.log(fibonacci(5))  // 5
console.log(fibonacci(3))  // 2
console.log(fibonacci(10)) // 55
console.log(fibonacci(77)) // dangerous for you device
