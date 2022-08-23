/*
Have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers,
the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), 
and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. 
For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. 
The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. T
he last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. 
If both ranges do not overlap by at least x numbers, then your program should return the string false. 
*/

function overlappingRanges(arr) {
    // 1. Declare a set object that will contain the first range set.
    // 2. Slice the first and the second set for their own variables.
    // 3. Set a counter with an initial value of zero.
    // 4. Loop trough the first set and push every item to the set object.
    // 5. Loop trough the second set and plus 1 the counter if the set had this number already.
    // 6. Check if the counter is at least the value of the last arr-index or more, if it does return true. else false.
}
