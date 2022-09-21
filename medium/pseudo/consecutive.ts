export {};
/*
Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents 
of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two 
numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters 
and no array will have less than 2 elements.
*/

function consecutive(arr: number[]) {
    // 1. Declare a sorted array from the array.
    // 2. Declare a set from the sorted array for unique values.
    // 3. Loop trough the array starting from index 1. Declare a variable for the prev value for readability.
    // 4. Loop trough the range from the prev index until the current index and add to the set every iteration (The set will take care of the uniqueness)
    // 5. Return the difference between the set size and the array length.
}
