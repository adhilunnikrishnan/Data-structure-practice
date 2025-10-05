function InsertionSort(arr) {
    const n = arr.length
    for(let i = 1; i < n; i++){
        const key = arr[i]
        let j = i - 1
        while(j >=0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j --
        }
        arr[j + 1] = key
    }
    return arr
}
console.log(InsertionSort([33, 54, 67, 8, 14, 90, 50]))