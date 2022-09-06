/*
Have the function ThreeSum(arr) take the array of integers stored in arr, and determine if any three distinct numbers (excluding the first element) 
in the array can sum up to the first element in the array. For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there are actually three sets of triplets 
that sum to the number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1]. Your program should return the string true if 3 distinct elements sum to the first element, 
otherwise your program should return the string false. The input array will always contain at least 4 elements.
*/

function threeSum(arr) {
    // 1. Get the target using shift.
    // 2. Declare a hashTable to collect our first data.
    // 3. Declare an empty array to collect all our first and second relevant numbers.
    // 4. Declare an empty array to collect if any hit the target.
    // 5. Loop trough the array and collect the data in the hashTable. The key will be the number and the value will be the index.
    // 6. Loop trough the array with number and index parameters =>
    /// 6.1 In that loop create another loop from our hashTable and declare a variable for our current value.
    /// 6.2 Check if the index isn't the same as the current object key-value.
    /// 6.3 Set result as the current number and the current object-property.
    /// 6.4 If the result is less than the target, push to our results array those both numbers as array of 2 numbers.
    // At this point we have array of arrays with 2 numbers that contain any two numbers that sum less than the target.
    // 7. Loop trough the array again,in that loop create another loop trough the array-of-arrays.
    // 8. Check if the current number plus the mini-array numbers sum to the target.
    // 9. If it does push to the hitTarget array those three numbers. (Because it's O(n^2) you will get any option that will sum for it.)
    // 10.Return if the hitTarget array has length, true : false.
}
