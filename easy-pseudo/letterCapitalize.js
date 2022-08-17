// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
// Words will be separated by only one space

function letterCapitalize(str) {
    // 1. Split the string to convert it into an array data structure. (Split by space parameter)
    // 2. Declare a result variable as an empty array
    // 3. Loop trough the string array
    /// 3.1 Split every string array item into an array data structure (In this case our item is a word)
    /// 3.2 Declare a variable for the first index of the word and upper-case it.
    /// 3.3 Remove the first index of the word (unshift).
    /// 3.4 Add at the start of the word-array the capitalize letter from the previous variable declaration. (unshift)
    /// 3.5 Push to the result array word in a string form. ( join() )
    // 4. Return the result array (which contains the words by index) and join it into a string form.
}
