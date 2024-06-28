const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => {
          <li key={book.__id}>
            {book.title} by {book.author} ({book.publicationYear})
          </li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
