import React from 'react';
import {Link} from 'react-router-dom';
 function Details({display,book,onClose}) {
    if(!display)
    {
        return null;
    }

    return(
        <>
            <div className="overlay">
                <div className="overlay-details">
                    <button className="close" onClick={onClose}>Close</button>
                    <div className="inner-details">
                        <img src={ `${ book.imageLinks? book.imageLinks.thumbnail: 'book image not loaded'}`} alt="" />
                        <div>
                            <h1>{book.title}</h1>
                            <h3>{book.authors}</h3>
                        </div>
                    </div>
                    <a href={book.previewLink} target={'_blank'}>see more</a>
                    <div className='desc'>{book.description}</div>
                </div>
            </div>
        </>
    )
}
export default Details