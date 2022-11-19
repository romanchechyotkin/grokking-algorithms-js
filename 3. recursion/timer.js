const timer = (num) => {
    console.log(num)
    if (num === 0) {
        return num
    } else {
        return timer(num - 1)
    }
}

timer(100)
