export {};
/*
Have the function StringPeriods(str) take the str parameter being passed and determine if there is some substring K that can be repeated 
N > 1 times to produce the input string exactly as it appears. Your program should return the longest substring K, and if there is none it should return the string -1.

For example: if str is "abcababcababcab" then your program should return abcab because that is the longest substring that is repeated 3 times to create the final string. 
Another example: if str is "abababababab" then your program should return ababab because it is the longest substring. 
If the input string contains only a single character, your program should return the string -1.
*/

function stringPeriods(str: string) {
    // 1. Check if the string length is less than 2, if so return -1.
    // 2. Declare a results array, which will be an array pf strings.
    // 3. Declare a recursion function that will take array and index as parameters.
    // 4. If the index is equal or greater than the arr.length, return.
    // 5. Declare the sub-string as the first item from the current array until the arr[index + 1]. (Using splice)
    // 6. Declare a new array that will be everything but the sub-sting. (From index + 1 until the end.)
    // 7. Declare a checker that will take the same parameters as the sub-string but this time on the new array variable.
    // 8. If the checker and the sub-string are equal, push it to the results array.
    // 9. Call the function itself with the new array and index + 1.
    // 10. Return the greatest sub-string from the array. if the is not any return -1.
}
