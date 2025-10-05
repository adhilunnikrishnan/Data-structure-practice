function findMaxMin(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return { max, min };
}
let nums = [75, 54, 67, 33, 11];
let result = findMaxMin(nums);
console.log("Array:", nums);
console.log("Max:", result.max);
console.log("Min:", result.min);