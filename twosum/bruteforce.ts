function twoSum(array: number[], targetSum: number): typeof array {
    // Write your code here.
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 1 + 1; j < array.length; j++) {
            if (targetSum == array[i] + array[j]) {
                return [i, j]
            }
        }
    }
  }

