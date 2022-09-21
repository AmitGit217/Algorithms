export {};
/*
Have the function CamelCase(str) take the str parameter being passed and return it in proper camel case format where the first letter of each word is capitalized 
(excluding the first letter). The string will only contain letters and some combination of delimiter punctuation characters separating each word.

For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
*/

function camelCase(str: string) {
    // 1. Declare a variable as a clean array of separated by space words/letters.
    // 2. Declare an array that will contain the upper cased version of the first letter.
    // 3. Loop trough the array excluding the first item and for each item upper case the first char, then push to the upper cased array.
    // 4. Declare an empty array that will contain all the finished words/letters
    // 5. Loop again trough the array an replace every first char with the upper cased one from the previous array. (bby index)
    // 6. Concat the first words/letter from the original str with the after manipulation array.
}
