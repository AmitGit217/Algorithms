export {};
/*
Have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all the other numbers in the array for each element. 
For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. 
The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. 
You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. 
The array will contain at most 10 elements and at least 1 element of only positive integers.
*/

function otherProduct(arr) {
    // 1. Declare a result array to collect the products
    // 2. Loop trough the array from the input =>
    // 3. Declare that for each iteration in the array you will set a variable in the result array that will be
    // the reduce product of each number in the array divided the the current array item.
    // 4. Return the result array in the needed form using join()
}
