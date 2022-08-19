import React, {Component, useEffect, useRef} from 'react'
import Book from './Book';
import { Link } from 'react-router-dom';

 function SearchBooks({searchBooks,allBooks, Search, onResetSearch,onchangeshelf} ) {
  const inputData = useRef();
  // console.log(inputData);


  const updatedBooks = searchBooks.map(book => {
    allBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });


  useEffect(()=>{
   inputData.current.focus();
  },[]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={onResetSearch}>Close</Link>
        <input  type="text"  ref={inputData} placeholder="Search by title, author, or ISBN" onChange={(e)=>{Search(e.target.value);}} />
    </div>

    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onchangeshelf={onchangeshelf}
          />
        ))}
      </ol>
    </div>

    </div>
  );
}

export default SearchBooks