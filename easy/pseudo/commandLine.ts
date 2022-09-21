export {};
/*
Have the function CommandLine(str) take the str parameter being passed which represents the parameters given to a command in an old PDP system. 
The parameters are alphanumeric tokens (without spaces) followed by an equal sign and by their corresponding value.
 Multiple parameters/value pairs can be placed on the command line with a single space between each pair.
  Parameter tokens and values cannot contain equal signs but values can contain spaces. 
  The purpose of the function is to isolate the parameters and values to return a list of parameter and value lengths. 
  It must provide its result in the same format and in the same order by replacing each entry (tokens and values) by its corresponding length.

For example, if str is: "SampleNumber=3234 provider=Dr. M. Welby patient=John Smith priority=High" 
then your function should return the string "12=4 8=12 7=10 8=4" because "SampleNumber" is a 12 character 
token with a 4 character value ("3234") followed by "provider" which is an 8 character token followed by a 12 character value ("Dr. M. Welby"), etc.
*/

function CommandLine(str: string) {
    // 1. Declare a token array with the following regex rules: Need to match the alphabet, can be one or more letters and must be before '=' sign.
    // after you get the words replace the '=' sign with ''.
    // 2. Declare a values array with the following regex rules: Replace everything that is connected before the '=' sign with only '=' sign.
    // 2.1 Then split the array by the '=' sign that we put, and for each item get rid of the extra space in the end if there is any.
    // 3. Declare an array for our results.
    // 4. Push to the array by index the current token=value in a string form.
    // 5. Return the array in a joined form.
}
