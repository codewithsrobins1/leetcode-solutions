// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 
// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

const plusOne = (digits) => {
    let len = digits.length;
    
    for(let i = len-1; i >= 0 ; i--){
        //increase the last digit by 1
        digits[i]++;
		
        //if after increment last digit becomes 10
        //then make it 0 and in the next iteration, second last digit 
        //will be increased by 1 
        if(digits[i] > 9){
            digits[i]=0;
        }
        else{
            return digits;
        }
    }
	
    //this is for special case when all digits are 9 e.g [9,9,9] and
    //output should be [1,0,0,0]. So, above for loop will make all the digits zero
    //and unshift method will add 1 in the starting of the array
    digits.unshift(1);
    
	return digits; 
};