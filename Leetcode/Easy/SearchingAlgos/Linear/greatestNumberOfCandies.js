// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 

var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    let result = [];
    
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= maxCandies){
            result.push(true)
        } 
        else {
            result.push(false)
        }
    }
    
    return result;
    
};