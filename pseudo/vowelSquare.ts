export {};
/*
Have the function VowelSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of some arbitrary size filled with letters from the alphabet,
 and determine if a 2x2 square composed entirely of vowels exists in the matrix. For example: strArr is ["abcd", "eikr", "oufj"] then this matrix looks like the following:

a b c d
e i k r
o u f j

Within this matrix there is a 2x2 square of vowels starting in the second row and first column, namely, ei, ou. 
If a 2x2 square of vowels is found your program should return the top-left position (row-column) of the square, 
so for this example your program should return 1-0. If no 2x2 square of vowels exists, then return the string not found. 
If there are multiple squares of vowels, return the one that is at the most top-left position in the whole matrix. 
The input matrix will at least be of size 2x2.
*/

function vowelSquare(strArr) {
    // 1. Declare a constant array that will include all the vowels. ([a,e,o,i,u])
    // 2. Loop trough the general array, declare the counter as "row" for readability.
    // 3. Loop inside the row itself and declare the counter as "column" for readability.
    /// Note: We are looping one index less because we are about to play with the index with +1 so with don't want to face any bug.
    // 4. Declare four variables with a check if the vowels array include the checked item such as: ( vowelsArr.includes(check) )
    // 4.1 Check if the current item is in the array (same row and column)
    // 4.2 Check if the top right item is in the array (same row, plus 1 the column)
    // 4.3 Check if the bottom left is in the array (Plus one the row, same column)
    // 4.4 Check if the bottom right is in the array (Plus one the row and the column)
    // 5. Check if all those statements are true at once, if they are return the top left position as row-column.
    // 6. Else return "not found"
}
