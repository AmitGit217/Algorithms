/*
Have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing 
and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 
because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. 
The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. 
If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.
*/

function changeSequence(arr) {
    // 1. Declare boolean value if the first and second items are in a increasing order or not.
    // 2. Declare state with a false value. (To check if any change happened)
    // 3. Declare a target with any value.
    // 4. Loop trough the array minus 1 the index =>
    /// 4.1 Check if the current item and the next item is increasing and the first boolean is the same, if true continue.
    /// 4.2 Check if the current item and the next item is decreasing and the boolean is the same, if true continue.
    /// 4.3 In any other case change the state to true and set the target to the current array item.
    // 5. Check if the state is true, if it does return the target, else return -1.
}
