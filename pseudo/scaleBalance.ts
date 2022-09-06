export {};
/*
Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale 
(left and right sides) and the second element being a list of available weights as positive integers. Your goal is to determine if you can balance the scale by using the 
least amount of weights from the list, but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale 
with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and 
adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated string of the weights that 
were used from the list in ascending order, so for this example your program should return the string 2,6
There will only ever be one unique solution and the list of available weights will not be empty. 
It is also possible to add two weights to only one side of the scale to balance it. 
If it is not possible to balance the scale then your program should return the string not possible.
*/

function scaleBalancing(strArr) {
    // 1. Declare a scale array using regex and balance array using regex.
    // 2. Take out the small number and big number from the scale as variables.
    // 3. Declare three objects (smallResults, mediumResults and bigResults)
    // 4. Declare an empty array as our result variable.
    // 5. Loop trough the balance array and for each item add the sum as a key to the relevant object, the value will be the used number.
    // 6. Check if the smallResults object has the big number, if it does return that value.
    // 7. Loop trough the balance array =>
    // 7.1 Set sum as the big number minus the current number, and write it in the mediumResults object.
    // 7.2 Loop trough the smallResults object as array and check if any key is in the mediumResults (our key is the sum)
    ///    If it does have it push their values into the results array.
    // 8. Loop trough the smallResults again and check if the bigResults has the same sum, if it does push them both to the result array.
    // 9. Check if the result array have any length and return in the needed form, else return not possible.
}
