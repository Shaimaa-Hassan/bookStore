 - steps for installing and launching the project:
The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.

1. Command for installing the dependencies - npm install .
2. Command for launching the project - npm start .


- the project description:
* Main Page
The main page shows three shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors. Each bookshelf is a reusable component.


The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.


When the browser is refreshed, the same information is displayed on the page.
* Search Page
1) The search page has a search input field.


a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. 
b) Search results are not shown when all of the text is deleted out of the search input box.
c) Invalid queries are handled and prior search results are not shown.
d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography"). (It's fine to filter out books with missing thumbnails.)
e) The user is able to search for multiple words, such as “artificial intelligence.”

Search results on the search page allow the user to select “Currently Reading”, “Want to Read”, or “Read” to place the book in a certain shelf.

If a book is assigned to a shelf on the main page and that book also appears on the search page, the correct shelf should be selected for that book on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.


When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.


The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search. Routing is implemented with React Router
The search page has a back button that brings users to the home page /


///////////////////////////////////////////////////////////////////////////////myreads project description:

I choose to seperate this project to 6 components in additional to app.js this components are:
1. book
2. bookshelf
3. mainpage
4. searchbooks
5. BookDetails
6. PageNotFound


Quick idea about this project:
mainpage contains bookshelves,
each bookshelf contains books, 
and each book contains bookshelf-changer and link to BookDetails Component to show more details,
in the other page called search includes search result books or reset by empty array
finally if you route to any different strange page you will access PageNotFound component and will display error msg  

- I used getAll() to get data from booksAPI and alert if there are any error in url or network - connection
- I used update(book,shelf) to locate and update book in shelves i call update then use switch case to remove the book from allbooks array or to change shelf and locate the book on the new shelf after i remove this book from old shelf 
- I used search (word) to search about books begins with this word and display result books founded, I create a new state to setState with books founded from search result or stState with empty array if not founded or in error case
  










