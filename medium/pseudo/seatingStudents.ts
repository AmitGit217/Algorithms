export {};
/*
Have the function SeatingStudents(arr) read the array of integers stored in arr which will be in the following format: [K, r1, r2, r3, ...] 
where K represents the number of desks in a classroom, and the rest of the integers in the array will be in sorted order and will represent the 
desks that are already occupied. All of the desks will be arranged in 2 columns, where desk #1 is at the top left, desk #2 is at the top right, 
desk #3 is below #1, desk #4 is below #2, etc. Your program should return the number of ways 2 students can be seated next to each other. 
This means 1 student is on the left and 1 student on the right, or 1 student is directly above or below the other student.

Based on above arrangement of occupied desks, there are a total of 6 ways to seat 2 new students next to each other. 
The combinations are: [1, 3], [3, 4], [3, 5], [8, 10], [9, 10], [10, 12]. So for this input your program should return 6. 
K will range from 2 to 24 and will always be an even number. After K, the number of occupied desks in the array can range from 0 to K.
*/

function SeatingStudents(arr: number[]) {
    // 1. Declare the number of tables as the first item in the array
    // 2. Declare an empty array that will contain our 2xn matrix.
    // 3. Declare a set that will contain all our combinations.
    // 4. Declare the taken seats as a set from the remaining array.
    // 5. Loop trough the number of tables length. starting from 1 as index an plus by 2 every iteration.
    // 5.1 In every iteration push a sub array to of the current element and the next one to the matrix of the class.
    // 6. Loop trough the matrix as rows and trough the row as column.
    // 6.1 Declare a current item for readability.
    // 6.2 Check if the current column is the last one if not check if the current item and the next one by column is not in the taken seated, if it is
    // Add to the combination set the sub array of those seats position.
    // 6.3 Check if the current row is the last one if not check if the current item and the next one by row is not in the taken seated, if it is
    // Add to the combination set the sub array of those seats position.
    // 7. Return the combinations set size.
}
