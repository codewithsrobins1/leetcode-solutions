// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function(nums) {
    let counter = 0;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j] && i < j){
                counter++
            }
        }
    }
    return counter;
};

