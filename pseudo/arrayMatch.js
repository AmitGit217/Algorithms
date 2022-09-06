/*
Have the function ArrayMatching(strArr) read the array of strings stored in strArr which will contain only two elements, 
both of which will represent an array of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], 
then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in corresponding locations from both arrays. 
For the example input, your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. 
Your program should finally return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17.
If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array (example shown below). 
Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array.
*/

function arrayMatching(strArr) {
    // 1. Declare an empty array to collect the needed data.
    // 2. Get the arrays in the needed form using regex and split.
    // 3. Declare length variable as the concatenation of both arrays and the length of it.
    // 4. Loop trough the index of the length variable =>
    /// 4.1 Declare parseInt variable for each array
    /// 4.2 Check if you got both, if do sum them and push to the array.
    /// 4.3 Check for each one if only the item of the relevant array is accruing and push him to the result as it is.
    // 5. return the result array in the needed form.
}
