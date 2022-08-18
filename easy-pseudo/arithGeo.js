/*
Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" 
if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern.
If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, 
where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
*/

function arithGeo(arr) {
    // 1. Declare two variables of empty arrays, one for checking if there is any false in arithmetic condition and the second if there is any false in geometric condition.
    // 2. Loop trough the array
    // 3. Declare a variable of what arithmetic is, and another variable for what geometric is.
    // 4. Check if we are not in the last index, that can cause an error.
    // 5. If the current array-item minus the previous one isn't arithmetic push 'false' to arithmetic-array
    // 6. If the current array-item divided the previous one isn't geometric push 'false' to geometric-array
    // 7. Depends of the arrays length return 'Geometric' or 'Arithmetic'. if they are both empty of do have any length return -1.
}
