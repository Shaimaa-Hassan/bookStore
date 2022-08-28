import React, {Component, useState} from 'react'
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import prototype from 'prop-types';

 function MainPage({ books}) {
    
  const departments=['currentlyReading', 'wantToRead', 'read'];
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {departments.map(department => (
            <Bookshelf key={department} // different key taken to each element
              department={department}//different department each department contains key and title
              books={books}/>))}
        </div>
      </div>
      <div className="open-search">
        <Link className='addbutton' to="search">Add a Book</Link>
      </div>
    </div>
  );
}

MainPage.prototypes ={
  departments:prototype.array.isRequired,
};

export default MainPage