const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request.get('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      const book = JSON.parse(body);
      for (let i = 0; i < book.length; i += 1) {
        console.log(book[i].id, book[i].name);
      }
    });
} else if (process.argv[2] === 'book') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const book = JSON.parse(body);
      console.log(book.name);
    });
}
