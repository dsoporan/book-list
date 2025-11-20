import { BookItem, BookList } from "./components";
import type { ComponentProps } from "react";

export default function App() {
  const bookList: ComponentProps<typeof BookItem>[] = [
    {
      title: "The Marked Oracle",
      description: "A thrilling fantasy novel by K.F. Breene.",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX329_BO1,204,203,200_.jpg",
    },
    {
      title: "Cherry Contact",
      description: "Some description about Cherry Contact by K.F. Breene.",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg",
    },
    {
      title: "Imageless Book",
      description: "A book with no image provided.",
    },
    {
      title: "Invalid image book",
      description: "This demonstrates fallback image behavior.",
      imageUrl: "https://this-image-does-not-exist.xyz/foo.jpg",
    },
    {
      title: "No description book",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL._SX331_BO1,204,203,200_.jpg",
    },
  ];

  return (
    <main style={{ padding: "1rem" }}>
      <BookList bookList={bookList} />
    </main>
  );
}
