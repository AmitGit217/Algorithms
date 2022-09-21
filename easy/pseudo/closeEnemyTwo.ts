export {};
/*
Have the function ClosestEnemyII(strArr) read the matrix of numbers stored in strArr which will be a 2D matrix that contains only the integers 1, 0, or 2. 
Then from the position in the matrix where a 1 is, return the number of spaces either left, right, down, or up you must move to reach an enemy which is represented by a 2. 
You are able to wrap around one side of the matrix to the other as well. For example: if strArr is ["0000", "1000", "0002", "0002"] then this looks like the following:

0 0 0 0
1 0 0 0
0 0 0 2
0 0 0 2

For this input your program should return 2 because the closest enemy (2) is 2 spaces away from the 1 by moving left to wrap to the other side and then moving down once. 
The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0.
*/

function closestEnemyII(strArr) {
    // 1. Declare an empty array for your player and for your enemies.
    // 2. Declare two constants that will contain the row size and column size.
    // 3. Do a double loop in the strArr and if there is 1 he's i & j to the array, if there is 2 do the same. push as mini array in 2. (i = row, j = column).
    // 4. Declare an empty array that will contain all are paths
    // 5. Loop trough the enemies array =>
    // 5.1 Set enemy as the current item.
    // 5.2 Declare a variable for the in row difference as the absolute value of the player[j] minus the enemy[j] (Columns)
    // 5.3 Declare a variable for the row difference as the absolute value of the player[i] minus the enemy[i] (Rows)
    // 5.4 Declare a normal path as the inRowDiff plus the row difference.
    // 5.5 In a variable contain the current player[j] position plus the row difference plus the absolute value of the enemy position minus the row size. (Wrap left)
    // 5.6 Do the same in the opposite direction for wrapping right way.
    // 5.7 In a variable contain the current player[i] position plus the in row difference plus the absolute value of the enemy position minus the column size. (Wrap up)
    // 5.6 Do the same in the opposite direction for wrapping down way.
    // 6. Push all the paths to the array and return the smallest value.
}
