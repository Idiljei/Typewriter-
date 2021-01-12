const sentence = "hello there from lighthouse labs";

let delay = 0;



for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; //delaying each character by 50 seconds
}
setTimeout(() => {
  process.stdout.write("\n");
}, delay); // new line starts outside of the for loop