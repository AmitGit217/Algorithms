/*
The task: 
    Have the function letterChange(str) take the str parameter being passed and modify it using the following algorithm. 
    Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
    Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
*/
function letterChange(str) {
    // 1. Get the alphabet in lower case version + split it to convert it to an array data structure.
    // 2. Split the str given to convert it into an array data structure.
    // 3. Set a const of an empty array for your result.
    // 4. Loop trough your given input str array + declare a variable for the current array item. (Example: let x = array[i])
    // 5. Inside loop create another loop for the alphabet array + declare a variable for the current array item. (Example: let x = array[i])
    // 6. Check if the array-item from both arrays are equal. ( Example: if(arr[i] == arr2[j]) )
    // 6.1 => Declare a variable for the given array item from the alphabet array, and increase the index by one. (Example: arr[i + 1])
    // 6.2 => if the array item is a vowel, upper case it and push it to the result array. else just push it as is.
    // 7. If the alphabet array doesn't include the given string array item (Which means it's a number a special character) just push it into the result array.
    // 8. Return the result array in a string from using the join() method.
}
