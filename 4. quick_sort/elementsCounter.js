const elementsCounter = (array) => {
    if (array.length === 0) {
        return 0
    }
    return 1 + elementsCounter(array.splice(1))
}

console.log(elementsCounter([1, 2, 3, 77])) // 4
console.log(elementsCounter([])) // 0
console.log(elementsCounter([100])) // 1
