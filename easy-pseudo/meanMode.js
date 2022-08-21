/*
Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 
0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
The array will not be empty, will only contain positive integers, and will not contain more than one mode.
*/

function meanMode(arr) {
    // 1. Create hash table to collect the data
    // 2. Get the sum using the reduce method ( arr.reduce((a,b) => a+b),0) )
    // 3. Get the mean by dividing the sum by the array length
    // 4. Loop trough the array and count for each value his appearance and set it in the hash table.
    // 5. Calculate the key with the highest value from the hash table with again reduce method.
    // 6. Return 1 if they are equal and 0 if they aren't
}
