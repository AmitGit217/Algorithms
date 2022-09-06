/*
Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, 
respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!
 */

function secondGreatLow(arr) {
    // 1. Declare an empty object to collect a unique key for every value in the array, the key value is the same ( 2: 2, 3: 3 etc.)
    // 2. Loop trough the array and assign those key/value pairs inside the empty object.
    // Note that now we have a unique key for repeated values so if there was like [1,2,3,4,5,5,5,5,5] in the object 5 will appear only once.
    // 3. Take all the values from the object form of an array and sort it.
    // 4. If the sorted array is less then 2 items (Which means that we had only two values with the same value [80,80]) return the same index arr[0]
    // 5. Else return the second item in the array and the second from the last in the index.
}
