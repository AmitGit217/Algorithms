/*Have the function ClosestEnemy(arr) take the array of numbers stored in arr and from the position in the array where a 1 is, 
return the number of spaces either left or right you must move to reach an enemy which is represented by a 2. For example: 
if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3 because the closest enemy (2) is 3 spaces away from the 1. 
The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, 
where in that case your program should return a 0.*/

function closestEnemy(arr) {
    // 1. Declare a variable for "me" with an initial values as the first item in the array.
    // 2. Declare an empty object that will contain our enemies.
    // 3. Declare an empty array that will contain our indexes for our enemies.
    // 4. Loop trough the array =>
    // 4.1 If the current Item is 1 set the "me" as the current item index.
    // 4.2 If the current item is 2, write in the object the index as the key and value of "enemy"
    // 5. Loop trough the keys of the enemies indexes and push to the empty array the absolute value of "me" minus the current enemy index.
    // 6. If their are any enemies return the smallest number, else return zero.
}
