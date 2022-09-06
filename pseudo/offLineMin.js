/*
Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" 
and return the correct subset based on the following rules. 
The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers 
and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas.
For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.
*/

function offLineMinimum(arr) {
    // 1. Declare an empty array to collect all the needed items.
    // 2. Set a relative small number as the first index of the array.
    // 3. Loop trough the array =>
    /// 3.1 Declare a variable for the index of the relative minimum number.
    /// 3.2 If the current item is smaller than the relative minimum, set the relative minimum as that number
    /// 3.3 If our loop got into and 'E' item push to the empty array the relative minimum.
    /// 3.4 Then eliminate the relative minimum from the array using the index variable, and remove the 'E' using splice for both.
    /// 3.5 Initial the 'i' counter to zero.(We want to start over the array)
    /// 3.6 Set the relative minimum again as the first item in the array.
    // 4. Return the result array in the needed form
}
