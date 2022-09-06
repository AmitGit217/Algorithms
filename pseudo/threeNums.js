/*
Have the function ThreeNumbers(str) take the str parameter being passed and determine if exactly three unique, 
single-digit integers occur within each word in the string. The integers can appear anywhere in the word, 
but they cannot be all adjacent to each other. If every word contains exactly 3 unique integers somewhere within it, 
then return the string true, otherwise return the string false. For example: if str is "2hell6o3 wor6l7d2" then your program should return "true" 
but if the string is "hell268o w6or2l4d" then your program should return "false" because all the integers are adjacent to each other in the first word.
*/

function threeNumbers(str) {
    // 1. Split the str into words array.
    // 2. Take out the digits from every word using map method and regex
    // 3. Set a state variable as true.
    // 4. Loop trough the numbers array of arrays.
    // 4.1 Create sub array of digits using split and join
    // 4.2 Check if the digits length is not exactly 3 or the numbers array isn't at least 2 length. if it does set state as false.
    // 4.3 Check if any of the numbers are the same. if it does set state as false.
    // 5. Return state.
}
