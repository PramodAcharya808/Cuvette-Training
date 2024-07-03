const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      {/* {console.log(books)} */}
      <ul>
        {books.map((book) => {
          <li key={book.__id}>
            {console.log(book)}
            {book.title} by {book.author} ({book.publicationYear})
          </li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
