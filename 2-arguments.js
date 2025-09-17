// process.argv is an array containing the command-line arguments.
// The first two elements are the Node.js executable path and the script path.
// The actual arguments start from index 2.
const args = process.argv.length - 2;

if (args === 0) {
  console.log("No argument");
} else if (args === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
