const x = parseInt(process.argv[2]);
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // The loop will only execute if 'x' is a positive integer.
  // If 'x' is 0 or a negative number, the loop condition (i < x) will be false,
  // and no output will be printed, which matches the expected behavior.
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}
