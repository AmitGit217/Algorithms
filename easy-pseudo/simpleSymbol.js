/*
Have the function SimpleSymbols(str) 
take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. 
The str parameter will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) 
and for the string to be true each letter must be surrounded by a + symbol. 
So the string to the left would be false. The string will not be empty and will have at least one letter. 
*/

function simpleSymbol(str) {
    // 1. Initialize an empty array to collect into it an item if there is any falsy thing in our algorithm. (Kind of state management)
    // 2. Get the alphabet as string and convert it into an array data structure.
    // 3. Convert the given string into an array data structure.
    // 4. Loop trough the string-array.
    /// 4.1 Loop trough the alphabet-array inside the string-loop.
    /// 4.2 Check if the alphabet array include the current string-array-item, then continue (Check if the array item is a letter)
    /// 4.3 Check if the alphabet contain the first or the last string-array-items, if true push 'false' to the state array.
    /// 4.4 If the last step was false continue here follow the next steps with "else"
    /// 4.5 Check if the array-items before and after the current item is "+", if true continue, else push 'false' to the state array.
    // 5. Return true if the state array is empty, else return false.
}
