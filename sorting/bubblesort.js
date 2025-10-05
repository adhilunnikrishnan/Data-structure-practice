const bubbleSort = (arr) => {
    const n = arr.length
    for (let i = 0; i < n; i++) {          
        for (let j = 0; j < n - 1 - i; j++) {
            
            if (arr[j] > arr[j + 1]) {
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([23, 54, 67, 16, 14, 90, 56]))