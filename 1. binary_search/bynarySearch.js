const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        let mid = Math.floor((low+high)/2)
        let guess = list[mid]
        if (guess === item) {
            console.log(`item in array at index ${mid}`)
            return mid
        } else if (guess > item) {
            high = mid - 1
        } else if (guess < item) {
            low = mid + 1
        }
    }

    return null
}

binarySearch(array, 9) // item in array at index 8
binarySearch(array, 5) // item in array at index 4
binarySearch(array, 1) // item in array at index 0
