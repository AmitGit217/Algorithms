export {};
/*
Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) 
in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], 
then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, 
in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11
If there are no two numbers that sum to the first element in the array, return -1 
*/

function twoSum(arr) {
    // 1. Declare a map object that will collect our data.
    // 2. Declare the target as the first item in the array an exclude it from the array.
    // 3. Declare an empty array for our result.
    // 4. Loop trough the array and for each item we will set ket/value pair in the map object. the key will be the number and the value will be the index.
    // 5. Loop trough the array again with forEach method and get the index parameter also =>
    /// 5.1 Declare a gap that will be the target number minus the current number.
    /// 5.2 Check if the map object has the current gap from the number and also if that gap isn't in the same index as the current number.
    /// 5.3 If it does push to the result array the gap and the number. then delete the number from the map object. (Avoid duplication)
    // 6. Return the array in the needed form, if there is no length return -1.
}
