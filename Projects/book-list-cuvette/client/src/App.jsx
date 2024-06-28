import { useEffect, useState } from "react";
import AddBook from "./components/AddBook.jsx";
import BookList from "./components/BookList.jsx";
import FilterBooks from "./components/FilterBooks.jsx";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/books/allbooks"
      );
      setBooks(response.data);
      console.log(books);
      setFilteredBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/books/addbook",
        book
      );
      setBooks([...book, response.data]);
      setFilteredBooks([...book, response.data]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const filterBooksByTitle = (title) => {
    if (title === "") {
      setFilteredBooks(books);
    } else {
      filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
      setFilteredBooks(filteredBooks);
    }
  };

  return (
    <div className="App">
      <h1 className="banner">Book Manager</h1>
      <AddBook addBook={addBook}></AddBook>
      <FilterBooks filterBooksByTitle={filterBooksByTitle}></FilterBooks>
      <BookList books={books}></BookList>
    </div>
  );
};

export default App;
