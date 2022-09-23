export {};
/*
Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: 
(i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: 
if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:
    4
   |
   2
  | \
  1  7   

which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree 
can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. 
All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.
*/

function TreeConstructor(strArr: string[]) {
    // 1. Map the array from string and create array of couples that will be our parent and child nodes.
    // 2. Declare an empty object for parents, children and a set for root.
    // 3. Loop trough the array of couples and declare variables for parent and child for readability.
    // 4. Count for each parent in the number of children.
    // 5. Do the same for each child the number of parents.
    // 6. After this loop, loop again if find all the roots. (Nodes without a parent at all)
    // 7. Find if there is any children with more than one parent.
    // 8. Find if the is any parent with more than two children.
    // 9. Check if you have exactly one root, no less no more. one.
    // 10. Return if the current data is a valid binary tree.
}
