import { BookItem } from "../index.ts";
import type { IBookItem } from "../BookItem/BookItem.tsx";
import { useState } from "react";
import { getRandomInt } from "../../utils/getRandomInt.ts";

interface BookListProps {
  bookList: IBookItem[];
}

const BookList = ({ bookList: bookListProp }: BookListProps) => {
  const [bookList, setBookList] = useState(bookListProp);

  const newBook: IBookItem = {
    title: "New Book Title",
    description: "Description of the new book.",
    imageUrl: "https://carturesti.ro/img-prod/4086036677-0.jpeg",
  };

  const handleAddBook = () => {
    setBookList([
      ...bookList,
      {
        ...newBook,
        title: newBook.title + " " + getRandomInt(1, 1000).toString(),
        description:
          newBook.description + " " + getRandomInt(1, 1000).toString(),
      },
    ]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {bookList.map((book, index) => (
        <BookItem
          key={`book-${book.title}-${index}`}
          title={book.title}
          description={book.description}
          imageUrl={book.imageUrl}
        />
      ))}
      <button
        onClick={handleAddBook}
        aria-label={`Add new book`}
        style={{ marginBottom: "0.5rem", width: "100%" }}
      >
        Add new book
      </button>
    </div>
  );
};

export default BookList;
