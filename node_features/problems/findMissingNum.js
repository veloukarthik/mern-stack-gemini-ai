function findMissingNumber(nums) {
    let n = nums.length;
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = nums.reduce((sum, num) => sum + num, 0);
    return totalSum - arraySum;
}

// Example Usage
console.log(findMissingNumber([3, 0, 1,2])); // Output: 2
