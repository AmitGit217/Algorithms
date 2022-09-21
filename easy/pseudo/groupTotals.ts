export {};
/*
Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs where the key is a string and the value is an integer. 
Your program should return a string with new key:value pairs separated by a comma such that each key appears only once with the total values summed up.

For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6,B:2.

Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0 after being summed up.
*/

function GroupTotals(strArr: string[]) {
    // 1. Declare an empty object that will contain or results.
    // 2. Loop trough the array.
    // 2.1 Declare a "key" with the following regex: every letter or number before ":" sign not included.
    // 2.2 Declare a "value" with the following regex: every number after ":" sign not included.
    // 2.3 Add the sum to the object by sign it like a hash map.
    // 3. Declare an empty array that will contain our final results.
    // 4. Loop trough the object keys in a sorted form. (They will sort automatically thanks to the ASCII table)
    // 4.1 Declare a value for readability.
    // 4.2 If the value is not 0, push to the array the key:value using template literals.
    // 5. Return the array in the needed format.
}
