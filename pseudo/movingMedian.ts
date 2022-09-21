export {};
/*
Have the function MovingMedian(arr) read the array of numbers stored in arr which will contain a sliding window size, N, 
as the first element in the array and the rest will be a list of numbers. Your program should return the Moving Median for each element based on the element and 
its N-1 predecessors, where N is the sliding window size. The final output should be a string with the moving median corresponding to each entry in the original 
array separated by commas.

Note that for the first few elements (until the window size is reached), the median is computed on a smaller number of entries. For example: 
if arr is [3, 1, 3, 5, 10, 6, 4, 3, 1] then your program should output "1,2,3,5,6,6,4,3"
*/

function MovingMedian(arr: number[]) {
    // 1. Declare an array that will collect all oru results
    // 2. Declare our time period as our first item in the given array.
    // 3. Loop trough the given time period length
    // 3.1 Set range as the range from the first item in the current array until the current index, then sort this range.
    // 3.2 Declare the median as the middle number in this array and another variable for the median less one by index.
    // 3.3 Check if range has any length and the index didn't reached the array length
    // 3.4 Check if the range length is odd. if it does push to the array of results the median.
    // 3.5 Else push the median + the median minus 1 by index and divide them by 2.
    // At this point we created our moving window, well now we are gonna move the window.
    // 4. Loop trough the array from the second index in the array forward.
    // 4.1 Declare a range as the range from the current index until the current index plus the window size. then sort the array.
    // 4.2 Declare the median as the middle number in this array and another variable for the median less one by index.
    // 4.3 Check if range length is deeply equal to the window size
    // 4.4 Check if the range length is odd. if it does push to the array of results the median.
    // 4.5 Else push the median + the median minus 1 by index and divide them by 2.
    // 5. Return the results array in the needed form.
}
