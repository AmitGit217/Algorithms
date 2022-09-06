export {};
/*
Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, 
take its binary representation (padded to the nearest N * 8 bits), reverse that string of bits, and then finally return the new reversed string in decimal form. 
For example: if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111. 
Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244.
*/

function binaryReversal(str) {
    // 1. Declare the str as number and an empty array to collect all the data.
    // 2. Set a recursion function that number as a parameter =>
    /// 2.1 If the number is less then 1 return the array.
    /// 2.2 Else check of the module of 2 is 0 if it does unshift zero, else unshift 1.
    /// 2.3 Divide the number by 2 and call the function again with the new value as floored version.
    // 3. While the array length isn't a perfect divide of 8, unshift zero.
    // 4. Declare a result with initial value of 0.
    // 5. Do a reversed loop trough the unicode array.
    // 6. If the current item value is 1, set the result value as plus the power of 2 and the current iteration index.
    // 7. Return result.
}
