//['s', 'e', 'a', 'n']
//Time Complexity - O(n)
//Space Complexity - O(1)
const reverseChar = (arr) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        //Swap Characters
        const temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }
}