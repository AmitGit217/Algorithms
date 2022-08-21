/*
Have the function CountingMinutesI(str) take the str parameter being passed which will be two times 
(each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. 
The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. 
If str is 1:00pm-11:00am the output should be 1320.
 */

function countingMin(str) {
    // 1. Declare an empty object that will contain our data.
    // 2. Split the string by "-" and declare a variable for each one. and split each one by ":"
    // 3. In the empty object create the hours, minutes and dayTime key/value pairs. also add a gap object inside that object.
    // 4. Convert the hours into a 24 hours modal (Use google to get the logic)
    // 5. Declare a counter with an initial value of the start hours * 60 + minutes.
    // 6. Declare a while loop that will fire until the counter reach to the end time (end.hours * 60 + end.minutes) and plus by one in any iteration
    // 7. If the counter hit 1440 (24 hours) reset to zero. add to the gap object the minutes needed, if minutes hit 60 reset and plus 1 the hours.
    // 8. Return the gap object data in the needed form.
}
