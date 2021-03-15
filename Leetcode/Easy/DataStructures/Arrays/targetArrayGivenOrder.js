// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// Example 1:

// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

//Time Complexity = O(n^2)
//Space Complexity = O(n)
var createTargetArray = function(nums, index) {
    let targetArray = [];

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        const currentIndex = index[i]

        //Take the target array, (insert at the currentIndex, delete 0 items, insert the value we want)
        targetArray.splice(currentIndex, 0,  num)
    }

    return targetArray;
};