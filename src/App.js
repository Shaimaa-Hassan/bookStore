import './App.css';
import MainPage from './Components/MainPage';
import SearchBooks from './Components/SearchBooks';
import React, { Component, useState, useEffect, createContext} from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import PageNotFound from './Components/PageNotFound';

export const userearange = createContext();

function App() {
  
  const  [allBooks, setAllBooks]=useState([]);// we locate all books got by api in this state
  const  [searchfound, setSearchfound ]=useState([]);//

  useEffect(()=>{
    //we use getAll function to get all books from api link and set all books we got in allBooks state
    // if there are any error in network or link or code written show to me me alert 
    BooksAPI.getAll().then(books => {console.log(books);setAllBooks(books);})
    .catch(() =>alert(" error occurred. Please check network connection and booksAPI url."));},[])
 
////////////////////////////////////////////////////////////////////////////////////////////////////
    const rearange = (book, shelf) => {//update shelf info// i need this function inside each book from apibooks
      BooksAPI.update(book, shelf).then(books=>console.log(books)).catch(() => {
        alert(" error occurred. Please try again after check network connection and booksAPI url.")
      });
      switch(shelf){
        case 'none': setAllBooks(allBooks.filter(item => item.id !== book.id))
        break
        default: {book.shelf = shelf;
          setAllBooks([... allBooks.filter(item => item.id !== book.id),book]);}
        break
      }
  //if book shelf equal none return allbooks not includes this book //or //else// change book shelf into new shelf
     // then remove this old book from the allbooks and  push this book with new shelf updated
    };

/////////////////////////////////////////////////////////////////////////////////////////////////////////

        //when we enter the character of book name that we want to search about it we take the input value 
        //in this function and run this function after apart of time equal 400ms then we check input type length 
        //if there are a length then we use search function for searching about this word 
        //and return all books includes thes word or return empty array if not found or in error case
        const  searchbyword =(word)=>{ setTimeout(()=> {
        word.length? 
           BooksAPI.search(word).then(booksfounded => {booksfounded.error? setSearchfound([]): setSearchfound(booksfounded);})
          : setSearchfound([]);
        },400)};

////////////////////////////////////////////////////////////////////////////////////////////////


//after we leave search page we reset all books appeare in result section to empty array if we return back we not found them again
      const  resetSearch = () => {
          setSearchfound([]);
        };
  
    
  return (
    <userearange.Provider value={rearange}>
    <Routes>
    <Route exact path="/"  element={<MainPage books={allBooks} />  }/>
        
    <Route path="/search" element={ <SearchBooks searchFounded={searchfound} 
         allBooks={allBooks}  onSearch={searchbyword} 
         ResetResult={resetSearch}  /> }  />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </userearange.Provider> 
  );
}

export default App;
