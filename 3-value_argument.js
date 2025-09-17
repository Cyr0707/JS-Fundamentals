// process.argv is an array containing the command-line arguments.
// The first two elements are the Node.js executable path and the script path.
// The actual arguments start from index 2.
const arg = process.argv[2];

if (arg) {
  console.log(arg);
} else {
  console.log("No argument");
}
