import React, {Component, useState} from 'react'
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

 function MainPage({ books, onchangeshelf}) {
    
  const[bookdepartments, setBookdepartments]= useState([ 
    { key: 'currentlyReading', title: 'Currently Reading' },
   { key: 'wantToRead', title: 'Want to Read' },
   { key: 'read', title: 'Read' }]);
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookdepartments.map(department => (
            <Bookshelf
              key={department.key} // different key taken to each element
              department={department}
              books={books}
              onchangeshelf={onchangeshelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link className='addbutton' to="search">Add a Book</Link>
      </div>
    </div>
  );
}



export default MainPage