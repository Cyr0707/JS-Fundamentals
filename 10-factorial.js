#!/usr/bin/node
/**
 * Computes the factorial of an integer recursively.
 * @param {number} n - The integer to compute the factorial of.
 * @returns {number} The factorial of n.
 */
function factorial (n) {
  // Base case: Factorial of NaN, 0, or 1 is 1.
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  // Recursive step: n multiplied by the factorial of n-1.
  return n * factorial(n - 1);
}

// Parse the first command-line argument as an integer.
const num = parseInt(process.argv[2]);

// Compute and print the factorial of the parsed number.
console.log(factorial(num));
