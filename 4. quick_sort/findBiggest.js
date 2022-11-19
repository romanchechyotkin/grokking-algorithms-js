const findBiggest = (array) => {
    if (array.length === 0) {
        return null
    }
    if (array.length === 2) {
        return array[0] > array[1] ? array[0] : array[1]
    }

    let arrWithOutSecond = []
    for (let i = 0; i < array.length; i++) {
        if (i !== 1) {
            arrWithOutSecond.push(array[i])
        }
    }

    return array[0] < array[1] ? findBiggest(array.slice(1)) : findBiggest(arrWithOutSecond)
}

console.log(findBiggest([1, 2])) // 2
console.log(findBiggest([34, 111])) // 111
console.log(findBiggest([1, 32, 34, 55])) // 55
console.log(findBiggest([32, 1, 34, 35])) // 35
console.log(findBiggest([111, 54, 2, 67, 0])) // 111

