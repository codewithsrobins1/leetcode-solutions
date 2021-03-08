// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false

var containsDuplicate = function(nums) {
    if(nums.length === 0){
        return false
    }
    
    const charMap = {}
    
    for(const ele of nums){
        charMap[ele] ? charMap[ele]++ : charMap[ele] = 1
    }
    
    for(const num in charMap){
        if(charMap[num] > 1){
            return true
        }
    }
    
    return false;
};