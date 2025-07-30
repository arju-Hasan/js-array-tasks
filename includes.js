// Create an array of books containing different book.
// 
// Use the includes method to check if the array contains a javascript book.
// 
// Print a message to the console indicating whether the element is present in the array or not

let books = ['bangla', 'english', 'math', 'science', 'javascript', 'css'];
console.log(books);
if (books.includes('javascript')) {
    console.log('JavaScript book is present in the array.');
} else {
    console.log('JavaScript book is not present in the array.');
}