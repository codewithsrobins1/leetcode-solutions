You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.



// "abc"
// ["a","b","c","ab","ac","bc","abc"]
var countConsistentStrings = function(allowed, words) {
    let count = 0;

    words.forEach(word => {
        for(let j = 0; j < words.length; j++){
            const char = word[j]

            if(!allowed.includes(char)) break;
            else if(j === word.length - 1){
                count++
            }
        }
    })
    return count;
};



// var countConsistentStrings = function(allowed, words) {
//     let counter = 0;
//     let allowedArray = allowed.split('');

//     for(let i = 0; i < words.length; i++){
//         for(let j = 0; j < allowedArray.length; j++){
//             if(words[i].includes(allowedArray[j])){
//                 counter++;
//             }
//         }
//     }

//     return counter;
// };