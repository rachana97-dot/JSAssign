function removeSpaces(str) {
    return str.split(' ').filter(Boolean).join('');
}

// Example
const stringWithSpaces = "Hello, world!";
const stringWithoutSpaces = removeSpaces(stringWithSpaces);
console.log(stringWithoutSpaces); // Output: "Hello,world!"
