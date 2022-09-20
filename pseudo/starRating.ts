export {};
/*
Have the function StarRating(str) take the str parameter being passed which will be an average rating between 0.00 and 5.00, 
and convert this rating into a list of 5 image names to be displayed in a user interface to represent the rating as a list of stars and half stars. 
Ratings should be rounded to the nearest half. There are 3 image file names available: "full.jpg", "half.jpg", "empty.jpg". 
The output will be the name of the 5 images (without the extension), from left to right, separated by spaces. 
For example: if str is "2.36" then your program should return the string "full full half empty empty".
*/

function StarRating(str: string) {
    // 1. Round the number to the nearest point 5 float.
    // 2. Declare an empty array that will contain our results.
    // 3. Loop trough the float number with index of 0.5 iterations.
    // 4. If the current i is bigger than 1 and is divided by 1 without a floating point, push "full"
    // 5. If the current i is bigger than the number itself and is not divided by 1 without a floating point, push "half"
    // 6. After the loop, while the result array is less than 5 length push "empty" with a while loop.
    // 7. Return the result in the needed form.
}
