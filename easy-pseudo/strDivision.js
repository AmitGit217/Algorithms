/*
Have the function DivisionStringified(num1,num2) take both parameters being passed, 
divide num1 by num2, and return the result as a string with properly formatted commas. 
If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). 
For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".
 */

function strDivision(num1, num2) {
    // 1. Split the solution of the division into an array (from String) and split by ".", then declare a variable for it.
    // 2. Declare a variable of an empty array which will contain our result.
    // 3. Check if we got a reminder by checking if the length of the array is less then 2, if it does declare an array from the number.
    // 4. Check if the array length is less then 4, which means it up to 999. if it does return the number as it is in joined form.
    // 5. Else, declare a counter with an initial value of zero, then do a negative loop trough the num-array. and in the counter count up by 1.
    /// 5.1 If the counter hit 3, push the current array-item, and after it a comma, them reset the counter to zero again. else just push the current.
    /// 5.2 Then return the result-array and a reversed form and joined.
    // If the splitted array was greater then 1, you have a reminder then o this.
    // 6. Set num as the first array-item and the reminder as the first char in the second array item.
    // 7. If the reminder is greater then 5, plus 1 the number. else return the num as it is.
    // 8. Declare an array from the number and set a negative loop like the first one with the same conditions.
    // 9. Return the num-array in a reversed and joined form.
}
