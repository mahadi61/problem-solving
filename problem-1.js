// Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

const multiplyNumber = (a, b, c) => a * b * c;
const result = multiplyNumber(2, 5, 6);
console.log(result);



// Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const sentence = `I am a web developer.
I love to code.
I love to eat biryani`
console.log(sentence);


// Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const sum  = (a, b=5) => a + b;
const resultOfSum = sum(3);
console.log(resultOfSum);
