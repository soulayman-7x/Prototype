
// let library2 = JSON.parse(localStorage.getItem('library2')) || [
//   { code: 1, title: "Think and Grow Rich", author: "Napoleon Hill", year: 1937, available: true, price: 350, image: "BOOKS/Think-and-Grow-Rich.png" },
//   { code: 2, title: "Meditations", author: "Marcus Aurelius", year: 180, available: true, price: 300, image: "BOOKS/Meditations.png" },
//   { code: 23, title: "Great Expectations", author: "Charles Dickens", year: 1861, price: 80, available: true, image: "BOOKS/Great-Expectations.png" },
//   { code: 223, title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, price: 67, available: true, image: "BOOKS/Jane-Eyre.png" },  { code: 98, title: "Wuthering Heights", author: "Emily Brontë", year: 1847, price: 198, available: true, image: "BOOKS/Wuthering-Heights.png" },
// ];

// function displayBooks(filteredBooks = library2) {
//   const container = document.getElementById('books-container');
//   container.innerHTML = '';

//   filteredBooks.forEach((book) => {
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = `
//       <img src="${book.image}" alt="${book.title}" class="book-img">
//       <h3>${book.title}</h3>
//       <p class="author">Author: ${book.author}</p>
//       <p class="year">Year : ${book.year}</p>
//       <p class="price">Price : ${book.price} DH</p>
//       <div class="bottom-card">
//       <p class="available">Available : ${book.available ? '✅' : '❌'}</p>
//       <button class="btn" onclick="deleteBook(${book.code})"><i class="fa-solid fa-trash-can"></i></button>
//     `;
//     container.appendChild(card);
//   });
//   updateState();
// }

// function deleteBook(code) {
//   const bookIndex = library2.findIndex(book => book.code === code);

//   if (bookIndex !== -1 && confirm('Are you sure you want to delete the book ?')) {

//     library2.splice(bookIndex, 1);
//     localStorage.setItem('library2', JSON.stringify(library2));
//     displayBooks();
//   }

// }

// function updateState() {
//   const total = library2.length;
//   const available = library2.filter(book => book.available).length;
//   document.getElementById('stats').innerHTML = `
//   <p>Total books : <span>${total}</span></p>
//   <p>Available books : <span>${available}</span></p>
//   `;
// }

// document.getElementById('search-input').addEventListener('input', function () {
//   const searchTerm = this.value.toLowerCase();
//   const filteredBooks = library2.filter(book => 
//     book.title.toLowerCase().includes(searchTerm) || 
//     book.author.toLowerCase().includes(searchTerm)
//   );
//   displayBooks(filteredBooks);
// });

// displayBooks();

let lib = JSON.parse(localStorage.getItem('lib')) || [
  { code: 1, title: "Think and Grow Rich", author: "Napoleon Hill", year: 1937, available: true, price: 350, image: "BOOKS/Think-and-Grow-Rich.png" },
  { code: 2, title: "Meditations", author: "Marcus Aurelius", year: 180, available: true, price: 300, image: "BOOKS/Meditations.png" },
  { code: 23, title: "Great Expectations", author: "Charles Dickens", year: 1861, price: 80, available: true, image: "BOOKS/Great-Expectations.png" },
  { code: 223, title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, price: 67, available: false, image: "BOOKS/Jane-Eyre.png" }, { code: 98, title: "Wuthering Heights", author: "Emily Brontë", year: 1847, price: 198, available: true, image: "BOOKS/Wuthering-Heights.png" },
];

function showBooks(filterBooks = lib) {
  let container = document.getElementById('books-container');
  container.innerHTML = '';

  filterBooks.forEach(book => {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" class="book-img">
      <h3>${book.title}</h3>
      <p class="author">Author: ${book.author}</p>
      <p class="year">Year : ${book.year}</p>
      <p class="price">Price : ${book.price} DH</p>
      <div class="bottom-card">
      <p class="available">Available : ${book.available ? '✅' : '❌'}</p>
      <button class="btn" onclick="deleteBook(${book.code})"><i class="fa-solid fa-trash-can"></i></button>
    `;
    container.appendChild(card);
  });
  updateState();
}

function deleteBook(code) {
  let bookIndex = lib.findIndex(book => book.code === code);
  if (bookIndex !== -1 && confirm('Are you sure you want to delete this book?')) {
    lib.splice(bookIndex, 1);
    localStorage.setItem('lib', JSON.stringify(lib));
    showBooks();
  }
}

function updateState() {
  let total = lib.length;
  let available = lib.filter(book => book.available).length;
  document.getElementById('stats').innerHTML = `
    <p>Total Books : <span> ${total}</span></p>
    <p>Available Books : <span>${available}</span></p>
  `;
}

document.getElementById('search-input').addEventListener('input', function(){
  const searchTerm = this.value.toLowerCase();
  const filteredBooks = lib.filter(book => 
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm)
  );
  showBooks(filteredBooks);
});

showBooks();