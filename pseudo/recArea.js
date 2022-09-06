/*
Have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements 
and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. 
The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] 
then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height.
*/

function rectangleArea(strArr) {
    // 1. Declare an empty array to collect the data in the wanted form.
    // 2. Loop trough the string-array =>
    /// 2.1 For every string item remove "-" using regex. (We may have negative numbers)
    /// 2.2 Push the needed part from the item as array of itself. (arr[0] = x, arr[1] = y)
    // 3. Declare height and width variables with 0 as their value.
    // 4. Set the relative to calculate point as the first item from the array using shift().
    // 5. Loop trough the array of points =>
    /// 5.1 Declare relative x,y points variables.
    /// 5.2 If the current x point is the same as the relative item x point, take the y indexes and do minus operator. set the result as height.
    /// 5.3 If the current y point is the same as the relative item y point, take the x indexes and do minus operator. set the result as width.
    // 6. Return the absolute value of the height * width
}
