const sum = (array) => {
    if (array.length === 0) {
        return null
    }
    return array[0] + sum(array.slice(1))
}

console.log(sum([2, 4, 6])) // 12
console.log(sum([14, 23, 5, 78])) // 120
