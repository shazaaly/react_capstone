var x = 8
++x                   /* 8 + 1 = 9  */
// console.log(x)  => 9
x++                   /* 9+1 = 10  */
// console.log(x)  => 10
console.log(x++);     /* 10 also because  console.log(x++) line is using post-increment, 
which means the value of x is first used in the console.log statement and then incremented.
 Therefore, the value logged to the console is the current value of x, 
 which is 10, before it gets incremented to 11. */

 
console.log(x);  /* increment will apply here and x =  */ 
