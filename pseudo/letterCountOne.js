/*
Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
If there are no words with repeating letters return -1. Words will be separated by spaces. 
*/

function lettersCountOne(str) {
    // 1. Declare a variable for the biggest current number and variable of an array with the value -1, also declare an object for the words. (An empty object)
    // 2. Split the string into an array then loop trough the array
    /// 2.1 For each item add to the words object the item as a key and initial value of zero.
    /// 2.2 Split the item itself into an array, and declare another empty object to collect the letters as keys, then loop trough the word.
    /// 2.3 Check if the letters-object contain the current letter, if it does add one to the value, if it doesn't create it with initial value of zero as well.
    // At this point we got 2 objects one with words that each of them got zero as a value. and letters object than contain the letters for each word and a counter as a value.
    // 3. Create and array from the values of the current word. then set the highest number as the value for the word key in the first object.
    // 4. Get the keys of the words object and loop trough the array ( Object.keys(obj) )
    /// 4.1 Set a variable for the current value for easy reading ( const value = object[key] )
    /// 4.2 If the current value is bigger than the biggest current num (The variable we declared at the start) set the biggest number as the current.
    /// 4.3 Pop out the '-1' value and push the current key to the relevant array.
    // 5. Return the first item in the biggest-array.
}
