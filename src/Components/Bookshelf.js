// import React, {useCallback} from 'react';
import Book from './Book';

 function Bookshelf( { department, books }) {
          
        const departmentBooks = books.filter(book => book.shelf === department);//check all books shelf in each department and return all books have the same department key 
      //  const call =useCallback( console.log('booksOnThisShelf', booksOnThisShelf));
        return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{department}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {departmentBooks.map(book => (//draw all books in it's department
                  <Book key={book.id} book={book} shelf={department} />
                ))}
              </ol>
            </div>
          </div>
        );
      };
      export default Bookshelf

