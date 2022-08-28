import React, {Component, useEffect, useRef} from 'react'
import Book from './Book';
import { Link } from 'react-router-dom';
import prototype from 'prop-types';

 function SearchBooks({searchFounded,allBooks, onSearch, ResetResult} ) {
  const inputData = useRef();
  // console.log(inputData);


  const resultFounded = searchFounded.map(book => {//searchBooks are foundedBooks after search operation
    
    allBooks.map(item => {
      {(item.id === book.id) && (book.shelf = item.shelf)}
      return item;});
      
    return book;
  });


  useEffect(()=>{
   inputData.current.focus();
  },[]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={ResetResult}>Close</Link>
        <input  type="text"  ref={inputData} placeholder="Search by title, author, or ISBN" onChange={(e)=>{onSearch(e.target.value);}} />
    </div>

    <div className="search-books-results">
      <ol className="books-grid">
        {resultFounded.map(book => (
          <Book key={book.id} book={book} shelf={book.shelf ? book.shelf : 'none'}/> ))}
      </ol>
    </div>

    </div>
  );
}
   SearchBooks.prototypes ={
  ResetResult:prototype.func.isRequired
   };

export default SearchBooks