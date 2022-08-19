import React,{useState} from 'react'

 function Book({ book, shelf, onchangeshelf }) {

 return(
        <li>
          <div className="book">
            <div className="book-top">
              <div  className="book-cover" style={{  width: 128,  height: 193, backgroundImage: `url(${ book.imageLinks? book.imageLinks.thumbnail: 'book image not loaded'})` }}/>
              
                   <div className="book-shelf-changer">
                   <select value={shelf? shelf : ''} onChange={(e)=>onchangeshelf(book,e.target.value)}>
                     <option value="move" disabled>
                       Move to...
                     </option>
                     <option value="currentlyReading">Currently Reading</option>
                     <option value="wantToRead">Want to Read</option>
                     <option value="read">Read</option>
                     <option value="none">None</option>
                   </select>
                   </div>

            </div>

            <div className="book-title">{book.title}</div>
            <div className="book-authors">
              {book.authors ? book.authors.join(', ') : 'Unknown Author'}
            </div>
          </div>
        </li>
 )
}
export default Book