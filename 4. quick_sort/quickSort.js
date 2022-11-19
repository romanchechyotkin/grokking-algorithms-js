const quickSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const pivot = array[0];
    let less = [];
    let greater = [];

    for (let i = 1; i < array.length; i += 1) {
        if (array[i] <= pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    return quickSort(less).concat(pivot, quickSort(greater));
}

console.log(quickSort([3, 4, 6, 1, 3])) // [1, 3, 3, 4, 6]
