// import React, {useCallback} from 'react';
import Book from './Book';

 function Bookshelf( { department, books, onchangeshelf }) {
          
        const departmentBooks = books.filter(book => book.shelf === department.key);//shelves contains shilf and shelf contains key and name
      //  const call =useCallback( console.log('booksOnThisShelf', booksOnThisShelf));
        return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{department.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {departmentBooks.map(book => (
                  <Book key={book.id} book={book} shelf={department.key} onchangeshelf={onchangeshelf} />
                ))}
              </ol>
            </div>
          </div>
        );
      };
      export default Bookshelf

