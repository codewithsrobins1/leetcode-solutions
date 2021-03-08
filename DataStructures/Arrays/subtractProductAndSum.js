// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

var subtractProductAndSum = function(n) {
    let numStr = n.toString();
    let splitNum = numStr.split('')
    let product = 1;
    let sum = 0;
    let result;
    
    for(let i = 0; i < splitNum.length; i++){
        product = product * parseInt(splitNum[i]) 
        sum = sum + parseInt(splitNum[i])
    }
    
    result = product - sum;

    return result;
    
};