function myFunction(a, b) {
  // Ensure both inputs are numbers before performing addition
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Please provide numbers";
  }
  return a + b; 
}

console.log(myFunction(5, "5")); // Outputs 10
console.log(myFunction(5, "abc")); //Outputs "Invalid input: Please provide numbers"