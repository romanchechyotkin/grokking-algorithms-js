const array = [1, 32, 6, 7, 9, 4, 3, 0, 99, 34, 55]

const selectionSort = (list) => {
    const size = list.length
    let sortedArray = []

    for (let i = 0; i < size; i++) {
        let smallest = findSmallest(list)
        sortedArray.push(list[smallest])
        list.splice(smallest, 1)
    }

    console.log(sortedArray) // [0, 1, 3, 4, 6, 7, 9, 32, 34, 55, 99]
    return sortedArray
}

const findSmallest = (array) => {
    let smallest = array[0]
    let smallestIndex = 0

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallestIndex = i
            smallest = array[i]
        }
    }

    return smallestIndex
}

selectionSort(array)
