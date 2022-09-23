export {};
/*
Have the function EightQueens(strArr) read strArr which will be an array consisting of the locations of eight Queens on a standard 8x8 chess 
board with no other pieces on the board. The structure of strArr will be the following: ["(x,y)", "(x,y)", ...] where (x,y) 
represents the position of the current queen on the chessboard (x and y will both range from 1 to 8 where 1,1 is the bottom-left of the 
chessboard and 8,8 is the top-right). Your program should determine if all of the queens are placed in such a way where none of them are
attacking each other. If this is true for the given input, return the string true otherwise return the first queen in the list that is attacking 
another piece in the same format it was provided.

For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"] then your program should return the string true. T
he corresponding chessboard of queens for this input is below (taken from Wikipedia).
*/

function EightQueens(strArr: string[]) {
    // 1. Declare a matrix with an easy form from our string-array. use map + regex.
    // 2. Declare an array that will contain all our results.
    // 3. Loop trough the matrix one time as "queen" and another nested loop as "queenTwo"
    // 4. Check if one of the parameters in the queen and queenTwo aren't equal, that means we are not checking the same queen.
    // 5. If the queens have the same row add the queen
    // 6. If the queens have the same column add the queen.
    // 7. Calculate a linear equation of (x,y) (x2,y2) to check the slope. if the slope is 1 add the queen.
    // Which also means the the absolute values of: y2-y === x2-x
    // 8. If the results array have any length return the first value in the needed form, else return true.
}
