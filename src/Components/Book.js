import React,{useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {userearange} from '../App';
import Details from './Details';



 function Book({ book, shelf }) {

  const [display,setDisplay]=useState(false);

const onrearange = useContext(userearange);
 return(
        <li>
          <div className="book">
            <div className="book-top">
              <div onClick={()=>{setDisplay(true);}} className="book-cover" style={{  width: 128,  height: 193, backgroundImage: `url(${ book.imageLinks? book.imageLinks.thumbnail: 'book image not loaded'})` }}/>
              
                   <div className="book-shelf-changer">
                   <select value={shelf? shelf : ''} onChange={(e)=>onrearange(book,e.target.value)}>
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
              {book.authors ? book.authors.join(', ') : 'none'}
            </div>
          </div>
          <Details display={display} book={book} onClose={()=>setDisplay(false)}/>
          
        </li>
 )
}
export default Book