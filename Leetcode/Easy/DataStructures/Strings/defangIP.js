// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"


//Time Complexity - O(n)
var defangIPaddr = function(address) {
    let defangedIP = [];
    let splitStr = address.split('');
    
    for(let i = 0; i < splitStr.length; i++){
        if(splitStr[i] === "."){
            defangedIP.push("[.]")
        }
        else {
            defangedIP.push(splitStr[i])
        }
    }
    return defangedIP.join('');
};