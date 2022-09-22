export {};
/*
Given an array of numbers and a target number, you must implement O(log(n)) time complexity to find the target number in the array.
If the number does not exist in the array return -1
*/

function binarySearch(arr: number[], target: number) {
    // 1. Declare a start position for the search as initial value of 0.
    // 2. Declare an end position for the search as initial value of array length minus 1.
    // Now we have the initial range of our search.
    // 3. Do a while loop where while the start position is less then the end position keep it on. The fall back will be for the -1.
    // 4. Declare a mid position in the current array where you will be using the start and the end values divided by 2. (and floor down)
    // 5. If the value of the mid position is equal to the target, return mid position.
    // 6. If the value of mid position is less then the target that means we can get rid of all the number from the mid and below.
    // 7. If the value of mid position is greater then the target that means we can get rid of all the number from the mid and above.
}
